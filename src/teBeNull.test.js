import makeNull from "./toBeNull";

it("To Be Null, Yeah I Know Is Uselless but for expect being null, in the doc is more useless", () => {
  expect(makeNull("data")).toBeNull();
});

// FYI for tobeUndefined, Nan is same, Soo maybe we don'nt need that
