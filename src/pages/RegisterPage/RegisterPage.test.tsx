import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a register page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading, a paragraph and a form", () => {
      render(<RegisterPage />);
      const paragraphText =
        "Registration will allow you to create your own quotes and add your favourite ones to your lists";

      const registerPageElements = [
        screen.getByRole("heading"),
        screen.getByText(paragraphText),
        screen.getByTestId("form-register"),
      ];

      registerPageElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
