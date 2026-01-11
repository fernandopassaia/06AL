import { TwoSum } from "../src/TwoSum";

type TwoSumTestCase = [
  number[], // nums
  number,   // target
  number[]  // expected (índices esperados ou apenas referência)
];

// 👇 Equivalente ao MemberData do C#
const twoSumTestData: TwoSumTestCase[] = [
  [
    [2, 7, 11, 15],
    18,
    [1, 2]
  ],
  [
    [2, 7, 11, 15],
    9,
    [0, 1]
  ],
  [
    [3, 2, 4],
    6,
    [1, 2]
  ]
];


describe("TwoSumUsingON2AndBrutalForce", () => {
  test.each(twoSumTestData)(
    "should return valid indexes for target %i",
    (nums, target) => {
      // Arrange
      const solver = new TwoSum();

      // Act
      const result = solver.twoSumUsingON2AndBrutalForce(nums, target);

      // Assert
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    }
  );
});

describe("TwoSumUsingON", () => {
  test.each(twoSumTestData)(
    "should return valid indexes for target %i",
    (nums, target) => {
      // Arrange
      const solver = new TwoSum();

      // Act
      const result = solver.TwoSumUsingON(nums, target);

      // Assert
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    }
  );
});
