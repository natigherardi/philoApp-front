import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../testUtils/Wrapper";
import QuoteCard from "./QuoteCard";

let mockDelete = jest.fn();
jest.mock("../../hooks/useQuotes/useQuotes", () => () => ({
  deleteQuote: mockDelete,
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Quote Card component", () => {
  const mockQuoteId = "mock-id";
  const quote = {
    textContent: "test text",
    author: "test",
    owner: "test user id",
    image: "text image",
    id: mockQuoteId,
  };
  describe("When it receives a quote object", () => {
    test("Then it should show a paragraph with the text received", () => {
      render(
        <Wrapper>
          <QuoteCard quote={quote} />
        </Wrapper>
      );

      [
        screen.getByAltText(quote.author),
        screen.getByText(quote.author),
        screen.getByText(quote.textContent),
      ].forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });

    test("And then it should also show a detail button that when clicked navigate function is called with 'quote' + the quote ID", async () => {
      const expectedTo = "/quote/mock-id";

      render(
        <Wrapper>
          <QuoteCard quote={quote} />
        </Wrapper>
      );

      const button = screen.getAllByRole("button")[0];
      await userEvent.click(button);

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith(expectedTo);
      });
    });

    describe("And when it's rendered in private quotes page", () => {
      test("Then it should also show a button which when clicked should  call the delete quote function with the quote id", async () => {
        render(
          <Wrapper>
            <QuoteCard quote={quote} />
          </Wrapper>
        );

        const button = screen.getAllByRole("button")[1];
        await userEvent.click(button);

        await waitFor(() => {
          expect(mockDelete).toHaveBeenCalledWith(mockQuoteId);
        });
      });
    });
  });
});
