import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import MyQuotesPage from "./MyQuotesPage";

jest.mock("../../hooks/useQuotes/useQuotes", () => () => ({
  loadPrivateQuotes: () => jest.fn().mockReturnValue([]),
}));

describe("Given the MyQuotes page", () => {
  describe("When rendered", () => {
    test("Then it should show a header, a title and a quotes list", () => {
      render(
        <Wrapper>
          <MyQuotesPage />
        </Wrapper>
      );
      const header = screen.getByAltText("philoApp-logo");
      const title = screen.getByText("My Quotes");
      const quotesList = screen.getByRole("list");

      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(quotesList).toBeInTheDocument();
    });
  });
});
