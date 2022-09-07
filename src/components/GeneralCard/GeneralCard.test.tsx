import { render, screen } from "@testing-library/react";
import GeneralCard from "./GeneralCard";

describe("Given a General Card component", () => {
  describe("When it receives a quote object and it's rendered", () => {
    test("Then it should show a paragraph with the text received", () => {
      const quote = {
        textContent: "test text",
        author: "test",
        image: "text image",
      };

      render(<GeneralCard quote={quote} />);

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
