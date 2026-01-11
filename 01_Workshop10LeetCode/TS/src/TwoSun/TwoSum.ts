export class TwoSum {

    public TwoSumBrutalForce(nums: number[], target: number): number[] {
        for(let i=0; i < nums.length; i++){
            for (let i2 = i + 1; i2 < nums.length; i2++){
                if((nums[i] + nums[i2]) == target){
                    return [i, i2];
                }
            }
        }
        throw new Error("No solution found");
    }

    public TwoSumDictionary(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for(let i=0; i < nums.length; i++){
            let currentValue = nums[i];
            if (map.has(currentValue)) {
                return [map.get(currentValue)!, i];
            }

            let complement = target - currentValue; // 18-2 = 16
            map.set(complement, i);
        }
        throw new Error("No solution found");
    }
}