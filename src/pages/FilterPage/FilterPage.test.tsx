import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import FilterPage from "./FilterPage";

const quote = {
  textContent: "test text",
  author: "test author",
  image: "test url image",
  owner: "test owner",
  id: "12",
  backUpImage: "test backUp",
  book: "test book",
  favoritedBy: [],
  school: "test school",
  year: "1",
};
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    author: "test-author",
  }),
}));

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: () => ({ publicQuotes: [{ author: "test-author" }] }),
// }));

jest.mock("../../hooks/useQuotes/useQuotes", () => () => ({
  loadPublicQuotes: () => jest.fn().mockReturnValue([quote]),
}));

describe("Given the FilterPage page", () => {
  describe("When rendered", () => {
    test.only("Then it should show a header, a title with the name fo the author and a quotes list", () => {
      render(
        <Wrapper>
          <FilterPage />
        </Wrapper>
      );
      const header = screen.getByAltText("philoApp-logo");
      const title = screen.getByText("Quotes by test-author");
      const quotesList = screen.getByRole("list");

      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(quotesList).toBeInTheDocument();
    });
  });
});
