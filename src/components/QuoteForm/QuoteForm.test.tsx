import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Wrapper from "../../testUtils/Wrapper";
import QuoteForm from "./QuoteForm";

describe("Given a quote form", () => {
  describe("When redered", () => {
    test("Then it should show 6 labels", () => {
      render(
        <Wrapper>
          <QuoteForm />
        </Wrapper>
      );
      const labels = [
        screen.getByText("Quote"),
        screen.getByText("Philosopher"),
        screen.getByText("Year"),
        screen.getByText("School"),
        screen.getByText("Book"),
        screen.getByText("Image"),
      ];

      labels.forEach((label) => {
        expect(label).toBeInTheDocument();
      });
    });
    test("And then it should also show 2 inputs, a textArea", () => {
      render(
        <Wrapper>
          <QuoteForm />
        </Wrapper>
      );
      const inputs = screen.getAllByRole("textbox");
      const yearInput = screen.getByRole("spinbutton");
      const imageInput = screen.getByLabelText("Image");
      const philosopherInput = screen.getByLabelText("Philosopher");

      expect(inputs).toHaveLength(3);
      expect(yearInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(philosopherInput).toBeInTheDocument();
    });

    test("And then it should also show a submit button", () => {
      render(
        <Wrapper>
          <QuoteForm />
        </Wrapper>
      );
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    test("Then, on submit, it should be submitted", async () => {
      render(
        <Wrapper>
          <QuoteForm />
        </Wrapper>
      );
      const quoteForm = screen.getByTestId("form-quote");
      const mockSubmit = jest.fn();
      axios.post = jest.fn();
      quoteForm.onsubmit = mockSubmit;
      const submitButton = screen.getByText("Create");
      await userEvent.click(submitButton);

      expect(mockSubmit).toHaveBeenCalled();
    });

    describe("And when the user types on each input", () => {
      test("Then each input should have the typed value", async () => {
        const expectedValue = "test";
        const imageMock = new File([""], "");
        const expectedPhilosopher = "Plato";
        const expectedYearValue = 123;

        render(
          <Wrapper>
            <QuoteForm />
          </Wrapper>
        );
        const imageInput = screen.getByLabelText("Image");
        const inputs = screen.getAllByRole("textbox");
        const philosopherInput = screen.getByLabelText("Philosopher");
        const yearInput = screen.getByRole("spinbutton");
        await fireEvent.change(philosopherInput, {
          target: { value: expectedPhilosopher },
        });
        await userEvent.upload(imageInput, imageMock);
        await userEvent.type(yearInput, "123");

        inputs.forEach(async (input) => {
          await userEvent.type(input, expectedValue);
          await expect(input).toHaveValue(expectedValue);
        });
        await expect(philosopherInput).toHaveValue(expectedPhilosopher);
        await expect(yearInput).toHaveValue(expectedYearValue);
      });
    });
  });
});
