// Failing test
function formatPhone(number) {
  return number;
}

// Comment the previous function and
// Uncomment this function to pass test
/*
function formatPhone(number) {
  var string = number.toString();
  var firstSegment = string.slice(0,3);
  var secondSegment = string.slice(3,7);
  
  return firstSegment + '-' + secondSegment;
}
*/

// Comment the previous functions and
// Uncomment this function to extend
// Functionality to match new tests
/*
function formatPhone(number) {
  var string = number.toString();

  if (string.length == 7) {
    var firstSegment = string.slice(0,3);
    var secondSegment = string.slice(3,7);
    return firstSegment + '-' + secondSegment;
  } else if (string.length == 10) {
    var areaCode = string.slice(0,3);
    var firstSegment = string.slice(3,6);
    var secondSegment = string.slice(6,10);
    return '(' + areaCode + ')' + firstSegment + '-' + secondSegment;
  }
}
*/
