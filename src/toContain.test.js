import testingContain from "./toContain";

it("Testing contain with `foobar`", () => {
  expect(testingContain("Zidni ")).toContain("foobar");
});
