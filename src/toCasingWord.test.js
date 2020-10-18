import { toLowerCase, toUpperCase, toChangeWorld } from "./toCasingWord";

it("To change to lowercase", () => {
  expect(toLowerCase("Zidni")).toBe("zidni");
});

it("To change to Uppercase", () => {
  expect(toUpperCase("zidni")).toBe("ZIDNI");
});

it("To Change The World", () => {
  expect(toChangeWorld("nice")).toBe("my");
});
