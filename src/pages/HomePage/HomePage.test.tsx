import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import HomePage from "./HomePage";

describe("Given the HomePage page", () => {
  describe("When rendered", () => {
    test("Then it should show a header, a title and a quotes list", () => {
      render(
        <Wrapper>
          <HomePage />
        </Wrapper>
      );
      const header = screen.getByAltText("philoApp-logo");
      const title = screen.getByText("All Quotes");
      const quotesList = screen.getByRole("list");

      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(quotesList).toBeInTheDocument();
    });
  });
});
