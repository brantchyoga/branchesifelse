$(document).ready(function() {
  $("form#choice").submit(function(event){
    var animal = $("#animals").val();
    console.log(animal);
    event.preventDefault();
    if (animal === "turtle") {
      $("#allinfo, #snakeinfo, #tigerinfo, #wolfinfo, #salmoninfo").hide();
      $("#turtleinfo").show();
    } else if (animal === "snake") {
      $("#allinfo, #turtleinfo, #tigerinfo, #wolfinfo, #salmoninfo").hide();
      $("#snakeinfo").show();
    } else if (animal === "tiger") {
      $("#allinfo, #turtleinfo, #snakeinfo, #wolfinfo, #salmoninfo").hide();
      $("#tigerinfo").show();
    } else if (animal === "wolf") {
      $("#allinfo, #turtleinfo, #snakeinfo, #tigerinfo, #salmoninfo").hide();
      $("#wolfinfo").show();
    } else if (animal === "salmon") {
      $("#allinfo, #turtleinfo, #snakeinfo, #tigerinfo, #wolfinfo").hide();
      $("#salmoninfo").show();
    } else if (animal === "All of Them!") {
      $("#turtleinfo, #snakeinfo, #tigerinfo, #wolfinfo, #salmoninfo").hide();
      $("#allinfo").show();
    }
  });
});

  // } else if (age === 18) {
  //   alert("Your now able to vote finally!");
  //   $('#vote').show();
  // } else {
  //   $('#under-18').show();
  // }
