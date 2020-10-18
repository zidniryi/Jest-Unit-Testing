import toFixed from "./toFixedYou";
console.log(toFixed("3.23233333"));
it("To fixed the data", () => {
  expect(toFixed("3.23233333")).toBe("3.23");
});
