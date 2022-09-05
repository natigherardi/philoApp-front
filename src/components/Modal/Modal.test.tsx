import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { closeModalActionCreator } from "../../store/ui/uiSlice";
import WrapperProps from "../../types/Wrapper";
import Modal from "./Modal";

let mockedUseSelector = {};
let mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedUseSelector,
  useDispatch: () => mockedDispatch,
}));

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

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
    render(
      <Wrapper>
        <Modal />
      </Wrapper>
    );

    setTimeout(() => {
      expect(mockedDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    }, 5000);
  });
});
