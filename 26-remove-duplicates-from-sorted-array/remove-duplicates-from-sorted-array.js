/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length ===0){
        return 0;
    }
    let count = 0
    
    for(let number = 0;number<nums.length;number++){
        if(nums[number]!= nums[number-1]){
            nums[count]=nums[number]
            count++;
        }
    }
    return count;
};