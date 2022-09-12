import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../testUtils/Wrapper";
import QuoteDetail from "./QuoteDetail";

let mockDelete = jest.fn();
jest.mock("../../hooks/useQuotes/useQuotes", () => () => ({
  deleteQuote: mockDelete,
}));

describe("Given a Quote Detail component", () => {
  const quote = {
    textContent: "test text",
    author: "test author",
    image: "test url image",
    owner: "test owner",
    id: "mock",
    backUpImage: "url test",
    book: "test book",
    school: "test school",
    year: "1",
  };
  describe("When it receives a quote object and it's rendered in the public quotes page", () => {
    test("Then it should show an image, paragraph, a list of 3 items, a span and a link", () => {
      render(
        <Wrapper>
          <QuoteDetail quote={quote} />
        </Wrapper>
      );
      const listItems = screen.getAllByRole("listitem");

      [
        screen.getByAltText(quote.author),
        screen.getByText(`School: ${quote.school}`),
        screen.getByText(quote.author),
        screen.getByText(quote.textContent),
        screen.getByRole("link"),
      ].forEach((element) => {
        expect(element).toBeInTheDocument();
      });
      expect(listItems).toHaveLength(3);
    });
  });

  describe("And when it's rendered in private quotes page", () => {
    test("Then it should also show a button which when clicked should  call the delete quote function with the quote id", async () => {
      render(
        <Wrapper>
          <QuoteDetail quote={quote} />
        </Wrapper>
      );

      const button = screen.getByRole("button");
      await userEvent.click(button);

      await waitFor(() => {
        expect(mockDelete).toHaveBeenCalledWith(quote.id);
      });
    });
  });
});
