import { render, screen } from "@testing-library/react";
import SmallButton from "./SmallButton";

describe("Given a Round Button component", () => {
  describe("When instantiated as delete type", () => {
    test("Then it should show a button", () => {
      render(<SmallButton onClick={() => {}} type="delete"></SmallButton>);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
