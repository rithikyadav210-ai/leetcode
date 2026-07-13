/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;

    for(let number = 0;number < nums.length;number++){
        if(nums[number] !== val){
            nums[count]=nums[number];
            count++;
        }
    }
    return count;
}