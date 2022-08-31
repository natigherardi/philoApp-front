import axios from "axios";
import UserRepository from "./UserRepository";

describe("Given a UserRepository class", () => {
  describe("When we have an instance", () => {
    const url = "";
    const userRepository = new UserRepository(url);
    test("Then it should exist", () => {
      expect(userRepository).toBeTruthy();
    });

    test("And then the method registration should make a post request with de user data received", async () => {
      const userData = { name: "", password: "", username: "" };
      axios.post = jest.fn().mockResolvedValue({ data: userData });

      const returnedValue = await userRepository.registration(userData);

      expect(returnedValue).toStrictEqual(userData);
    });
  });
});
