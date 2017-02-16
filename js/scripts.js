// $(document).ready(function() {
//   var over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");
//
//   if (over21) {
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#vote').show();
  } else if (age === 18) {
    alert("Your now able to vote finally!");
    $('#vote').show();
  } else {
    $('#under-18').show();
  }
});
