public class TwoSumAgain
{
    public int[] TwoSumDictionaryAgain(int[] values, int target)
    {
        var map = new Dictionary<int, int>();
        for (int i = 0; i < values.Length; i++)
        {
            var currentValue = values[i];
            if (map.ContainsKey(currentValue))
            {
                return new int[] { map[currentValue], i };
            }

            var complement = target - currentValue;
            map[complement] = i;
        }
        throw new Exception("No such value");
    }
}