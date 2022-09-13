import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import WrapperRealStore from "../../testUtils/WrapperActualStore";
import Menu from "./Menu";
import userEvent from "@testing-library/user-event";
import { logoutUserActionCreator } from "../../store/user/userSessionSlice";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Menu component", () => {
  describe("When rendered and the user is not logged in", () => {
    test("Then it should show a link to register and another one to log in", () => {
      render(
        <WrapperRealStore>
          <Menu />
        </WrapperRealStore>
      );

      const registerLink = screen.getByText("Register");
      const logInLink = screen.getByText("Log In");

      expect(registerLink).toBeInTheDocument();
      expect(logInLink).toBeInTheDocument();
    });
    describe("And when rendered and the user is not logged in", () => {
      test("Then it should show a link with text 'Log Out' which when clicked the dispatch should be called with a logOutUser action", async () => {
        const expectedAction = logoutUserActionCreator();

        render(
          <Wrapper>
            <Menu />
          </Wrapper>
        );
        const logOutLink = screen.getByText("Log Out");
        await userEvent.click(logOutLink);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });
});
