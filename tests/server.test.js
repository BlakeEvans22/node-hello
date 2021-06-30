const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("Root path should return HTTP code 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  test("Root path should return hello world text", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello World!");
  });
});
