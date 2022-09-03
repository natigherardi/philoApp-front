import axios from "axios";
import UserRepository from "./UserRepository";

describe("Given a UserRepository class", () => {
  const url = "";
  const userRepository = new UserRepository(url);
  describe("When we have an instance", () => {
    test("Then it should exist", () => {
      expect(userRepository).toBeTruthy();
    });

    describe("When the registration method is called", () => {
      const userData = { name: "", password: "", username: "" };
      test("Then if the API returns an OK response, the method should return the data of the response", async () => {
        axios.post = jest.fn().mockResolvedValue({ data: userData });

        const returnedValue = await userRepository.registration(userData);

        expect(returnedValue).toStrictEqual(userData);
      });

      test.only("And then if the API returns an error, the method should return an error", async () => {
        const error = {};
        axios.post = jest.fn().mockRejectedValue(error);

        const returnedValue = await userRepository.registration(userData);

        expect(returnedValue).toStrictEqual(error);
      });
    });
  });
});
