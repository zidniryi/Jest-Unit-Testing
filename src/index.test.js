import sum from "./sum";

it("works", () => {
  expect(1 + 1).toBe(2);
});

const data = { name: "zidni" };
data["age"] = 12;
it("how it work", () => {
  expect(data).toEqual({ name: "zidni", age: 12 });
});

it("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
