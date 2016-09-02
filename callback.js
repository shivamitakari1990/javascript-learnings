function a(callback) {
setTimeout(function() {
  console.log('in func a')
}, 2000)
callback();
}

function b() {
setTimeout(function() {
  console.log('in func b')
}, 1000)

}
function c() {
  a(b)
return 'c';
}
