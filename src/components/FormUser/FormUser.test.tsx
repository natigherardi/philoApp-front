import { render, screen } from "@testing-library/react";
import FormUser from "./FormUser";

describe("Given a User Form component", () => {
  describe("When rendered", () => {
    render(<FormUser />);
    test("Then it should show three labels", () => {
      const nameLabel = screen.getByText("Name");
      const usernameLabel = screen.getByText("Username");
      const passwordLabel = screen.getByText("Password");

      expect(nameLabel).toBeInTheDocument();
      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("And then it should show three inputs", () => {
      render(<FormUser />);

      const inputs = screen.getAllByRole("textbox");
      const passwordInput = screen.getByText("Password");

      expect(passwordInput).toBeInTheDocument();
      expect(inputs).toHaveLength(2);
    });
  });
});
