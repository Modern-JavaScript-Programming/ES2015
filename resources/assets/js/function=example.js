/*
* Functional JavaScript
* First Class Function
*/
// 1. A Functiona can be stored  in a variable
// 2. A Function can be stored in an array
// 3. A Functiona can be stored in an Object Field or Property
// 4. We can create Functiona as an when required
// 5. We can pass Function as an argument
// 6. We can return Function from another Function
function base (b) {
  return function (n) {
    var result = 1
    for (i = 0; i < b; i++) {
      result *= n
    }
    return result
  }
}

// var power = base(3)

// console.log(power)

// var result = power(2)
// console.log(result)

var _result = base(2)(4)
console.log(_result)
