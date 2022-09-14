import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import listOfAuthors from "../../utils/listOfAuthors";
import Search from "./Search";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the Search component", () => {
  describe("When rendered", () => {
    test("Then it should show each author's name of the listOfAuthors", () => {
      render(
        <Wrapper>
          <Search />
        </Wrapper>
      );
      let authorOptions: HTMLElement[] = [];

      listOfAuthors.forEach((author) => {
        authorOptions.push(screen.getByText(author));
      });
      expect(authorOptions).toHaveLength(listOfAuthors.length);
    });
  });
});
