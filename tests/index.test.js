import { test, expect, describe } from "bun:test";
import exp from "constants";

describe("Demo tests", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  })
  test.skip("wrong test", () => {
    expect(2 + 2).toBe(5);
  })
})
