import { TwoSum } from "../src/TwoSun/TwoSum";
import { TwoSunAgain } from "../src/TwoSun/TwoSunAgain";

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


describe("TwoSumBrutalForce", () => {
  test.each(twoSumTestData)(
    "should return valid indexes for target %i",
    (nums, target) => {
      // Arrange
      const solver = new TwoSum();

      // Act
      const result = solver.TwoSumBrutalForce(nums, target);

      // Assert
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    }
  );
});

describe("TwoSumDictionary", () => {
  test.each(twoSumTestData)(
    "should return valid indexes for target %i",
    (nums, target) => {
      // Arrange
      const solver = new TwoSum();

      // Act
      const result = solver.TwoSumDictionary(nums, target);

      // Assert
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    }
  );
  });

  describe("TwoSumDictionaryAgain", () => {
  test.each(twoSumTestData)(
    "should return valid indexes for target %i",
    (nums, target) => {
      // Arrange
      const solver = new TwoSunAgain();

      // Act
      const result = solver.TwoSumDictionaryAgain(nums, target);

      // Assert
      expect(nums[result[0]] + nums[result[1]]).toBe(target);
    }
  );
});
