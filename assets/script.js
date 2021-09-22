moment().format();
var hourForm = $("form").addClass("time-block");
var inputArray = [];

//outputs the current day at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Displays the elements on the page
for (let i=1; i<25; i++) {
    $("#block-storage").append(hourForm);
}