var box1 = document.getElementsByClassName("firstbox");
var box2 = document.getElementsByClassName("secondbox");
var box3 = document.getElementsByClassName("thirdbox");

var rbtn1 = document.getElementById("radiobtn1");
var rbtn2 = document.getElementById("radiobtn2");
var rbtn3 = document.getElementById("radiobtn3");

box1[0].addEventListener("click", function () {
  if (rbtn1.checked == true) {
    box1[0].style.borderColor = "#04aa6d";
    box1[0].style.backgroundColor = "#D2F6C5";

    rbtn2.checked = false;
    box2[0].style.borderColor = "black";
    box2[0].style.backgroundColor = "white";
    rbtn3.checked = false;
    box3[0].style.borderColor = "black";
    box3[0].style.backgroundColor = "white";
  }
});

box2[0].addEventListener("click", function () {
  if (rbtn2.checked == true) {
    box2[0].style.borderColor = "#04aa6d";
    box2[0].style.backgroundColor = "#D2F6C5";

    rbtn1.checked = false;
    box1[0].style.borderColor = "black";
    box1[0].style.backgroundColor = "white";
    rbtn3.checked = false;
    box3[0].style.borderColor = "black";
    box3[0].style.backgroundColor = "white";
  }
});

box3[0].addEventListener("click", function () {
  if (rbtn3.checked == true) {
    box3[0].style.borderColor = "#04aa6d";
    box3[0].style.backgroundColor = "#D2F6C5";

    rbtn1.checked = false;
    box1[0].style.borderColor = "black";
    box1[0].style.backgroundColor = "white";
    rbtn2.checked = false;
    box2[0].style.borderColor = "black";
    box2[0].style.backgroundColor = "white";
  }
});