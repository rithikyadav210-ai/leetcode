/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a,b)=>a-b);
    let minaverage=Infinity;
    let low=0;
    let high=nums.length-1
    while(low<=high){
        let average=((nums[low]+nums[high])/2);
        low++
        high--
       minaverage=Math.min(minaverage,average)
       
        
    }  
    return minaverage

};