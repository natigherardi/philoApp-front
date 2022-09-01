import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When rendered", () => {
    test("Then it should show the logo image", () => {
      const logoAltText = "philoApp-logo";

      render(<Header />);
      const logoImage = screen.getByAltText(logoAltText);

      expect(logoImage).toBeInTheDocument();
    });
  });
});
