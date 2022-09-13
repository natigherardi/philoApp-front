import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../testUtils/mockStore";
import WrapperProps from "../../types/Wrapper";
import QuotesList from "./QuotesList";

let mockedQuote = {
  textContent: "test text",
  author: "test author",
  image: "test url image",
  owner: "test owner",
  id: "12",
  backUpImage: "",
  book: "",
  favoritedBy: [],
  school: "",
  year: "",
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("Given a quotes list", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("When it's rendered and it receives a list of quote", () => {
    test("Then it should show a list with the quote received", () => {
      render(
        <Wrapper>
          <QuotesList quotesToRender={[mockedQuote]} />
        </Wrapper>
      );

      const list = screen.getByRole("list");
      const listItems = screen.getAllByRole("listitem");
      const quoteText = screen.getByText("test text");

      expect(list).toBeInTheDocument();
      expect(listItems).toHaveLength(1);
      expect(quoteText).toBeInTheDocument();
    });
  });
});
