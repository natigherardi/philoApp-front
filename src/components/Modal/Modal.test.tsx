import { fireEvent, render, screen } from "@testing-library/react";
import { closeModalActionCreator } from "../../store/ui/uiSlice";
import Wrapper from "../../testUtils/Wrapper";
import WrapperRealStore from "../../testUtils/WrapperActualStore";
import Modal from "./Modal";

let mockedUseSelector = {};
let mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedUseSelector,
  useDispatch: () => mockedDispatch,
}));

describe("Given a modal", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When it's rendered and there is an error", () => {
    test("Then it should show 'Error ꭗ' and the message of the error", () => {
      mockedUseSelector = {
        modal: {
          isError: true,
          isOpen: true,
          message: "mocking error",
        },
      };
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );
      const expectedText = "Error ꭗ";

      const modalTitle = screen.getByText(expectedText);

      expect(modalTitle).toBeInTheDocument();
    });

    test("And then it should show a text with the description of the error", () => {
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );
      const expectedDescription = "mocking error";

      const modalDescription = screen.getByText(expectedDescription);

      expect(modalDescription).toBeInTheDocument();
    });
  });

  describe("And when it's rendered and there is succeded process", () => {
    test("Then it should show 'Success ✓' and the message of the error", () => {
      mockedUseSelector = {
        modal: {
          isError: false,
          isOpen: true,
          message: "mocking success",
        },
      };
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );
      const expectedText = "Success ✓";

      const modalTitle = screen.getByText(expectedText);

      expect(modalTitle).toBeInTheDocument();
    });

    test("And then it should show a text with the description of the error", () => {
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );
      const expectedDescription = "mocking success";

      const modalDescription = screen.getByText(expectedDescription);

      expect(modalDescription).toBeInTheDocument();
    });
  });

  test("And then if it is open, after 5 seconds the dispatch should be called with an action closeModal", () => {
    jest.useFakeTimers();

    render(
      <Wrapper>
        <Modal />
      </Wrapper>
    );

    jest.advanceTimersByTime(5000);

    expect(mockedDispatch).toHaveBeenCalledWith(closeModalActionCreator());
  });

  describe("And when the isOpen property of UIData store branch is false", () => {
    test("Then the modal shouldn't be in the document", () => {
      const errorMessage = screen.queryByText("Error ꭗ");
      const successMessage = screen.queryByText("Success ✓");

      render(
        <WrapperRealStore>
          <Modal />
        </WrapperRealStore>
      );

      expect(mockedDispatch).not.toHaveBeenCalled();
      expect(errorMessage).not.toBeInTheDocument();
      expect(successMessage).not.toBeInTheDocument();
    });
  });

  describe("And when the user clicks on the close button", () => {
    test("Then the dispatch should be called ith an action to close the modal", async () => {
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );
      const closeButton = screen.getByTestId("close-icon");

      await fireEvent.click(closeButton);

      expect(mockedDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
});
