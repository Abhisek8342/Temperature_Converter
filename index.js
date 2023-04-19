 // input Field validation...
 $(".input1").keyup(function () {
  var a = $(".input1").val();
  if (isNaN(a)) {
    $("#valid")
      .text("Please enter a valid number.")
      .css("color", "red")
      .show()
      .fadeOut(3000);
  } else {
    $("#valid").text(" ");
  }
});
// Temperature Calculation Part....
$(".btn").click(function () {
  var choice = $("#selec").val();
  var a = parseInt($(".input1").val());
  var choice2 = $("#selec2").val();

  if (choice == "Celsius") {
    if (choice2 == "Fahrenheit") {
      var tempr = a * (9 / 5) + 32;
      $(".result").val(tempr);
    }
  } else if (choice == "Fahrenheit") {
    if (choice2 == "Celsius") {
      var temp = (5 / 9) * (a - 32);
      $(".result").val(temp);
    }
  } else if (choice == "Kelvin") {
    if (choice2 == "Celsius") {
      var tm = a - 273.15;
      $(".result").val(tm);
    }
  } 
   if (choice == "Celsius") {
    if (choice2 == "Kelvin") {
      var kel = a + 273.15;
      $(".result").val(kel);
    }
  } else if (choice == "Fahrenheit") {
    if (choice2 == "Kelvin") {
      var kelv = (a + 459.67) * (5 / 9);
      $(".result").val(kelv);
    }
  } else if (choice == "Kelvin") {
    if (choice2 == "Fahrenheit") {
      var fahre = 1.8 * (a - 273) + 32;
      $(".result").val(fahre);
    }
  }
});
