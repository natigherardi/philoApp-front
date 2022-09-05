import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import WrapperProps from "../../types/Wrapper";
import LoginForm from "./LoginForm";

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a Login Form component", () => {
  describe("When rendered", () => {
    test("Then it should show two labels", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );
      const usernameLabel = screen.getByText("Username");
      const passwordLabel = screen.getByText("Password");

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("And then it should show three inputs", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );
      const passwordInput = screen.getByLabelText("Password");
      const input = screen.getByRole("textbox");

      expect(passwordInput).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  });

  describe("When the user types in each input", () => {
    test("Then each input should have the typed value", async () => {
      const expectedValue = "1";
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );
      const passwordInput = screen.getByLabelText("Password");
      const usernameInput = screen.getByLabelText("Username");

      await userEvent.type(passwordInput, expectedValue);
      await userEvent.type(usernameInput, expectedValue);

      await expect(passwordInput).toHaveValue(expectedValue);
      await expect(usernameInput).toHaveValue(expectedValue);
    });
  });

  test("Then, on submit, it should be submitted", async () => {
    render(
      <Wrapper>
        <LoginForm />
      </Wrapper>
    );
    const form = screen.getByTestId("form-login");
    const mockSubmit = jest.fn();
    axios.post = jest.fn();
    form.onsubmit = mockSubmit;
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });
});
