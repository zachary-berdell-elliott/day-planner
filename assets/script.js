moment().format();
var hourForm = $("<div>").addClass("time-block");
var hourLable = $("<p>").addClass("hour");
var textEntry = $("<textarea>");
var saveBtn = $("<button>").addClass("saveBtn");
var inputArray = [];

//outputs the current day at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Displays the elements on the page by creating a timeblock for each hour in the day and appending the required elements to it.
for (let i=0; i<25; i++) {
    $("#block-storage").append(hourForm.clone().attr("id", "block"+i.toString()));
    hourForm.append(hourLable.text(moment(i.toString(), "k").format("hA")));
    hourForm.append(textEntry);
    hourForm.append(saveBtn);

    //decides the color and sets the appropriate tasks based on whether the hour-block is current, present or future

    //saves the user input to the input array
}