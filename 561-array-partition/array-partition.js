/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let total=0
    nums=nums.sort((a,b)=>a-b);
    for(let i =0;i<nums.length;i=i+2){
        total=total+nums[i]
        
    }
    return total

    
};