import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import QuoteDetailPage from "./QuoteDetailPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => "test-details-id",
}));

describe("Given a QUote detail page", () => {
  describe("When rendered", () => {
    test("Then it should show a header and a quote Detail component", () => {
      render(
        <Wrapper>
          <QuoteDetailPage />
        </Wrapper>
      );
      const header = screen.getByAltText("philoApp-logo");
      const quoteDetail = screen.getByText("test detail");

      expect(header).toBeInTheDocument();
      expect(quoteDetail).toBeInTheDocument();
    });
  });
});
