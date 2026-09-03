/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0
    for(let all of words){
        if(all.startsWith(pref)){
            count++
        }
    }
    return count
 

};