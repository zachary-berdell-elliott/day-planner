var hourForm = $("<div>").addClass("time-block");
var hourLable = $("<p>").addClass("hour");
var textEntry = $("<textarea>");
var saveBtn = $("<button>").addClass("saveBtn");
var inputArray = [];

//outputs the current day at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Displays the elements on the page by creating a timeblock for each hour in the day and appending the required elements to it.
for (let i=0; i<25; i++) {
    let stringI = i.toString();
    let idAssign = "block"+stringI;
    let iterateHour = moment(stringI, "k");
    let currentHour = moment().format("k");

    $("#block-storage").append(hourForm.clone().attr("id", idAssign));
    idAssign = $("#" + idAssign);
    idAssign.append(hourLable.text(iterateHour.format("hA")));
    idAssign.append(textEntry);
    idAssign.append(saveBtn);

    //decides the color and sets the appropriate tasks based on whether the hour-block is current, present or future
    if (iterateHour < currentHour) {
        idAssign.addClass("past");
    }
    else if (iterateHour > currentHour) {
        idAssign.addClass("future");
    }
    else {
        idAssign.addClass("present");
    }


    //saves the user input to the input array
}