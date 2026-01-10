// @ts-nocheck
// vscode-disable-inline-completions
namespace Algorithms;

public class TwoSum
{
    // Wrong Way using O(n^2)
    public int[] TwoSumUsingON2AndBrutalForce(int[] inputs, int target)
    {
        for (int i = 0; i < inputs.Length; i++)
        {
            for (int i2 = i + 1; i2 < inputs.Length; i2++)
            {
                if (inputs[i] + inputs[i2] == target)
                {
                    return new int[] { i, i2 };
                }
            }
        }
        return new int[] { };
    }

    // Good Way using Hashmap / Map / Dictionary
    public int[] TwoSumUsingONAndHashmap(int[] inputs, int target)
    {
        var map = new Dictionary<int, int>();

        for (int i = 0; i < inputs.Length; i++)
        {
            
        }
        
        
        
        return new int[] { };
    }
}