var dayMode = document.getElementById("day");

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = [i];
  option.text = [i];
  dayMode.appendChild(option);
}

var monthMode = document.getElementById("month");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.text = months[i];
  monthMode.appendChild(option);
}

var yearMode = document.getElementById('year');

for (var i = 1900; i <= 2017; i++) {
  var option = document.createElement("option");
  option.value = [i];
  option.text = [i];
  yearMode.appendChild(option);
}

var name1 = document.querySelector("#userName");
var email1 = document.querySelector("#emailOrNumber");
var email2 = document.querySelector("#reEmailOrNumber");
var valid = document.querySelector("#valid");

function validateAccount() {
  if (email1.value === email2.value)  {

   console.log("Thank you, " + name1.value + ",account created successfully ");
   valid.innerHTML = "Thank you, " + name1.value + ",account created successfully";

  } else {

    valid.innerHTML = "Failed to create account";
    console.log("Failed to create account");
    email1.style.border = "1px solid red";
    email2.style.border = "1px solid red";
  }
}

var Button = document.querySelector(".submit");
Button.addEventListener("click",validateAccount);
