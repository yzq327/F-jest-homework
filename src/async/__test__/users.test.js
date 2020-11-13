import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    const result = getUsers();
    await expect(result).resolves.toEqual({ name: "NANA" });
  });
});
