import { sum } from "./sum";

describe("Sum", () => {
  it("should return sum 1 + 1 equals 2", () => {
    const sut = sum(1, 1);

    expect(sut).toBe(2);
  });
});
