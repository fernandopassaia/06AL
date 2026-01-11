export class TwoSunAgain{
    public TwoSumDictionaryAgain(nums: number[], target: number): number[]{
        const map = new Map<number, number>();
        for(let i =0; i < nums.length; i++){
            const currentValue = nums[i];
            if(map.has(currentValue)){
                return [map.get(currentValue)!, i];
            }
            let complement = target - nums[i];
            map.set(complement, i);
        }
        throw new Error("Not found");
    }
}