/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let final=command.replaceAll("()","o").replaceAll("(al)","al")
    return final
};