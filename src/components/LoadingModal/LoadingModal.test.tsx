import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import LoadingModal from "./LoadingModal";

describe("Guiven a loading modal", () => {
  describe("When it's rendered", () => {
    test("Then it should show a spinner and a test 'Loading...", () => {
      render(
        <Wrapper>
          <LoadingModal />
        </Wrapper>
      );

      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
    });
  });
});
