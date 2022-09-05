import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import LoginPage from "./LoginPage";

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
