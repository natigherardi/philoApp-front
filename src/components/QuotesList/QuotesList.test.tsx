import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../testUtils/mockStore";
import WrapperProps from "../../types/Wrapper";
import QuotesList from "./QuotesList";

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("Given a quotes list", () => {
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
