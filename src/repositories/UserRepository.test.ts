import { waitFor } from "@testing-library/react";
import axios from "axios";
import { mockComponent } from "react-dom/test-utils";
import UserRepository from "./UserRepository";

describe("Given a UserRepository class", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  /*const url = process.env.REACT_APP_API_URL as string;
  describe("When we have an instance", () => {
    test("Then it should exist", () => {
      const userRepository = new UserRepository(url);
      expect(userRepository).toBeTruthy();
    });

    describe("When the registration method is called", () => {
      const userData = { name: "", password: "", username: "" };
      test("Then if the API returns an OK response, the method should return the data of the response", async () => {
        const userRepository = new UserRepository(url);
        axios.post = jest.fn().mockResolvedValue({ data: userData });

        const returnedValue = await userRepository.registration(userData);

        expect(returnedValue).toStrictEqual(userData);
      });

      test("And then if the API returns an error, the method should return an error", async () => {
        const error = {};
        const userRepository = new UserRepository(url);
        axios.post = jest.fn().mockRejectedValue(error);

        const returnedValue = await userRepository.registration(userData);

        expect(returnedValue).toStrictEqual(error);
      });
    }); */

  describe("And when the login method is called", () => {
    test("Then if the API returns an OK response the method should return the user data from the request", async () => {
      const userRepository = new UserRepository(
        `https://ngherardi-final-project-202207.herokuapp.com`
      );
      const userData = { username: "testLogin", password: "123" };
      const expectedResponse = { data: { user: { token: "mocked token" } } };

      const { data } = await userRepository.login(userData);
      await waitFor(async () => {
        await expect(data).toStrictEqual(expectedResponse);
      });
    });
  });
});
// });
