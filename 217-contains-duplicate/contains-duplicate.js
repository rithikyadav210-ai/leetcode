/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicate={}
    for(let num of nums){
        duplicate[num]=duplicate[num]+1||1
        if(duplicate[num]>1){
            return true
        }
    }
    return false
};
 