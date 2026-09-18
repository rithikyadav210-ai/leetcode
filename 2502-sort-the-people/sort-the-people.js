/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let result =[]
    for(let i = 0; i < heights.length;i++){
        result.push([names[i],heights[i]]);
    }
    result.sort((a,b) => b[1]-a[1]);
    return result.map(person=>person[0])

    
};