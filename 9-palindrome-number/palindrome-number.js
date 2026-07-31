/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed=Number(String(x).split("").reverse().join(""));
    if(reversed===x){
        return true;
    }else{
        return false
    }
    
};