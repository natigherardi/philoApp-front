import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import QuotesList from "./QuotesList";

describe("Guven a quotes list", () => {
  describe("When it's rendered and the state has a TestQuote", () => {
    test("Then it should show a list with a TestQuote card", () => {
      render(
        <Wrapper>
          <QuotesList />
        </Wrapper>
      );

      const cardImage = screen.getByRole("list");
      const listItems = screen.getAllByRole("listitem");

      expect(cardImage).toBeInTheDocument();
      expect(listItems.length).toBeGreaterThan(0);
    });
  });
});
