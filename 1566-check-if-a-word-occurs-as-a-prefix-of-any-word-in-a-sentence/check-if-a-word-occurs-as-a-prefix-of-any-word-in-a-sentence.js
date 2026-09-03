/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    
    let splited=sentence.split(" ")
    for(let i=0;i<splited.length;i++){
        if(splited[i].startsWith(searchWord)){
            return i + 1;
        }
    }
    return -1
};