$(document).ready(function() {
  var height = parseInt(prompt("Enter your Height in inches!"));

  if (height <= 48) {
    $("#ride2, #ride3").hide();
    $("#ride1").show();
  } else if (height >= 49 && height <= 60) {
    $("#ride3").hide();
    $("#ride2, #ride1").show();
  } else if (height > 60){
    $("#ride1").addClass("red")
    $("#ride1, #ride2, #ride3").show();
    alert("Your to tall to ride the kiddy ride!")
  } else {
      alert("Are you sure you enter just a number in Inches?");
    };
});
