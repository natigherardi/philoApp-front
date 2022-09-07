import { render, screen } from "@testing-library/react";
import App from "../../App";
import Wrapper from "../../testUtils/Wrapper";

let mockedUseSelector = {};
let mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedUseSelector,
  useDispatch: () => mockedDispatch,
}));

describe("Guiven a loading modal", () => {
  describe("When it's rendered and the page is loading", () => {
    test("Then it should show a spinner and a test 'Loading...", () => {
      mockedUseSelector = {
        modal: {},
        isLoading: true,
      };

      render(
        <Wrapper>
          <App />
        </Wrapper>
      );

      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
    });
  });
});
