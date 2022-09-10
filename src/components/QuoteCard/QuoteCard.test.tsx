import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import QuoteCard from "./QuoteCard";

describe("Given a General Card component", () => {
  describe("When it receives a quote object and it's rendered", () => {
    test("Then it should show a paragraph with the text received", () => {
      const quote = {
        textContent: "test text",
        author: "test",
        image: "text image",
      };

      render(
        <Wrapper>
          <QuoteCard quote={quote} isPrivate={false} />
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
  });
});
