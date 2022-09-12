import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import CreateQuotePage from "./CreateQuotePage";

describe("Given a Create Quote page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading, a header and a form", () => {
      render(
        <Wrapper>
          <CreateQuotePage />
        </Wrapper>
      );
      const title = screen.getByText("Create your own quote");
      const header = screen.getByAltText("philoApp-logo");
      const form = screen.getByTestId("form-quote");

      expect(title).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(form).toBeInTheDocument();
    });
  });
});
