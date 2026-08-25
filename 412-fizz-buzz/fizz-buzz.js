/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let total =[]
    for(let i = 1 ; i <= n;i++){
        if(i%3===0 && i%5===0){
            total.push("FizzBuzz")
        }
        else if(i%3===0){
            total.push("Fizz")
        }else if(i%5===0){
            total.push("Buzz")
        }else{
            total.push(i.toString())
        }
        }
        return total
    }
     
