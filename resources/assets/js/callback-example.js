
function add (a, b, callback) {
  var c = a + b
  var d = a - b
  callback(c, d)
}

add(10, 3, function (c, d) {
  console.log('Print only number: ' + c + ' and ' + d)
})
