import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../testUtils/mockStore";
import WrapperProps from "../../types/Wrapper";
import QuotesList from "./QuotesList";

jest.mock("../../hooks/useQuotes/useQuotes", () => () => ({
  loadPublicQuotes: () =>
    jest.fn().mockReturnValue([
      {
        textContent: "test text",
        author: "test author",
        image: "test url image",
        owner: "test owner",
        id: "12",
      },
    ]),
  loadPrivateQuotes: () =>
    jest.fn().mockReturnValue([
      {
        textContent: "test text private quote",
        author: "test author",
        image: "test url image",
        owner: "test owner",
        id: "12",
      },
    ]),
}));

let mockedLocation: { pathname: string };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockedLocation,
}));

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
  describe("When it's rendered in home page and the state has a public TestQuote", () => {
    test("Then it should show a list with a public Quote card", () => {
      mockedLocation = {
        pathname: "/home",
      };

      render(
        <Wrapper>
          <QuotesList />
        </Wrapper>
      );

      const list = screen.getByRole("list");
      const listItems = screen.getAllByRole("listitem");
      const quoteText = screen.getByText("test text");

      expect(list).toBeInTheDocument();
      expect(listItems.length).toBe(1);
      expect(quoteText).toBeInTheDocument();
    });
  });

  describe("And when there is  a private TestQuote in the state and the list is rendered in 'MyQuotes'", () => {
    test("Then it should show a list with a private Quote card", () => {
      mockedLocation = {
        pathname: "/notHome",
      };

      render(
        <Wrapper>
          <QuotesList />
        </Wrapper>
      );
      const list = screen.getByRole("list");
      const listItems = screen.getAllByRole("listitem");
      const quoteText = screen.getByText("test text private quote");

      expect(list).toBeInTheDocument();
      expect(listItems.length).toBe(1);
      expect(quoteText).toBeInTheDocument();
    });
  });
});
