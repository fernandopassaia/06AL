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
  ],
  [
    [1, 5, 9, 13, 17, 21, 25, 29, 33, 37,
     41, 45, 49, 53, 57, 61, 65, 69, 73, 77],
    90,
    [6, 13]
  ],
  [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
     110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
    210,
    [0, 9]
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
      const result = solver.twoSumUsingON(nums, target);

      // Assert
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    }
  );
});
