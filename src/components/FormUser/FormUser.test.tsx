import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormUser from "./FormUser";
import axios from "axios";

describe("Given a User Form component", () => {
  describe("When rendered", () => {
    test("Then it should show three labels", () => {
      render(<FormUser />);
      const nameLabel = screen.getByText("Name");
      const usernameLabel = screen.getByText("Username");
      const passwordLabel = screen.getByText("Password");

      expect(nameLabel).toBeInTheDocument();
      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("And then it should show three inputs", () => {
      render(<FormUser />);
      const passwordInput = screen.getByLabelText("Password");
      const inputs = screen.getAllByRole("textbox");

      expect(passwordInput).toBeInTheDocument();
      expect(inputs).toHaveLength(2);
    });
  });

  describe("When the user types in each input", () => {
    test("Then each input should have the typed value", async () => {
      render(<FormUser />);
      const expectedValue = "1";
      render(<FormUser />);
      const passwordInput = screen.getByLabelText("Password");
      const usernameInput = screen.getByLabelText("Username");
      const nameInput = screen.getByLabelText("Name");

      await userEvent.type(passwordInput, expectedValue);
      await userEvent.type(usernameInput, expectedValue);
      await userEvent.type(nameInput, expectedValue);

      await expect(passwordInput).toHaveValue(expectedValue);
      await expect(usernameInput).toHaveValue(expectedValue);
      await expect(nameInput).toHaveValue(expectedValue);
    });
  });

  test("Then, on submit, it should be submitted", async () => {
    render(<FormUser />);
    const form = screen.getByTestId("form-register");
    const mockSubmit = jest.fn();
    axios.post = jest.fn();
    form.onsubmit = mockSubmit;
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });
});
