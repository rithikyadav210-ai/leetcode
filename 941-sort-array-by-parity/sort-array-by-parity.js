/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evennumber=[]
    let oddnumber=[]
    for(let numbers of nums){
        if(numbers % 2 === 0){
            evennumber.push(numbers)
        }else{
            oddnumber.push(numbers)
        }
    }
    return evennumber.concat(oddnumber)
};