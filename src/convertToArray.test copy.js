import convertToArray from "./convertToArray";

it("Converting data into array", () => {
  expect(convertToArray("foo")).toEqual(["f", "o", "o"]);
});
