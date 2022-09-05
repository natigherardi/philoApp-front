import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import WrapperProps from "../../types/Wrapper";
import LoginPage from "./LoginPage";

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("Given a login page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading, a paragraph and a form", () => {
      render(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );

      const loginPageElements = [
        screen.getByRole("heading"),
        screen.getByRole("link"),
        screen.getByTestId("form-login"),
      ];

      loginPageElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
