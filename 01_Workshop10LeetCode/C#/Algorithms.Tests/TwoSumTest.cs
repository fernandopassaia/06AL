namespace Algorithms.Tests;

public class TwoSumTest
{
    public static IEnumerable<object[]> TwoSumTestData =>
        new List<object[]>
        {
            new object[]
            {
                new int[] { 2, 7, 11, 15 },
                9,
                new int[] { 0, 1 }
            },
            new object[]
            {
                new int[] { 3, 2, 4 },
                6,
                new int[] { 1, 2 }
            },
            new object[]
            {
                new int[] { 1, 5, 9, 13, 17, 21, 25, 29, 33, 37,
                    41, 45, 49, 53, 57, 61, 65, 69, 73, 77 },
                90,
                new int[] { 6, 13 } // 25 + 65
            },
            new object[]
            {
                new int[] { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
                    110, 120, 130, 140, 150, 160, 170, 180, 190, 200 },
                210,
                new int[] { 0, 9 } // 10 + 200
            }
        };
    
    [Theory]
    [MemberData(nameof(TwoSumTestData))]
    public void Should_Return_Indexes_When_TwoSumUsingON2AndBrutalForce(
        int[] nums,
        int target,
        int[] expected)
    {
        // Arrange
        var solver = new TwoSum();

        // Act
        int[] result = solver.TwoSumUsingON2AndBrutalForce(nums, target);

        // Assert
        Assert.Equal(target, nums[result[0]] + nums[result[1]]);
    }
}
