import checkEmptyArray from "./emptyArray";
const array = ["1", "2"];
it("Check Empty Array", () => {
  expect(checkEmptyArray(array)).toBe(true);
});
