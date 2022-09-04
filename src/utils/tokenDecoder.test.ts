import jwt from "jwt-decode";
import tokenDecoder from "./tokenDecoder";

jest.mock("jwt-decode", () => jest.fn());

describe("Given a tokenDecoder function", () => {
  describe("When it's invoked with a token '#'", () => {
    test("Then should return the username, id and token", () => {
      const tokenMock = "#";
      (jwt as jest.Mock).mockImplementation(() => ({ user: { tokenMock } }));
      tokenDecoder(tokenMock);

      expect(jwt).toHaveBeenCalledWith(tokenMock);
    });
  });
});
