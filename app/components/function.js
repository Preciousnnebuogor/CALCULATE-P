//function expression
/*const peter = function(){
    console.log("i am okay")
}
peter() */

// function declaration

/*function Name(age,name){
    console.log(`i am ${age} years old`)
    console.log(`my name is ${name}`)
}
Name(26,"Precious")
Name(12,"Blessing") */

function isEven(number){
    if(number % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(4))
// short cut
function isOdd(number){
  return  number % 2 === 1? true :false
}
console.log(isOdd(5))