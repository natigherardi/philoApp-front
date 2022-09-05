import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When rendered", () => {
    test("Then it should show the logo image and a menu button", () => {
      const logoAltText = "philoApp-logo";

      render(
        <Wrapper>
          <Header />
        </Wrapper>
      );
      const logoImage = screen.getByAltText(logoAltText);
      const menuButton = screen.getByRole("button");

      expect(menuButton).toBeInTheDocument();
      expect(logoImage).toBeInTheDocument();
    });
  });
});
