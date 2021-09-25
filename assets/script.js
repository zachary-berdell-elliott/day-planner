

var inputArray = [];

//outputs the current day at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Displays the elements on the page by creating a timeblock for each hour in the day and appending the required elements to it.
for (let i=0; i<=8; i++) {
    //variable assignment
    var hourForm = $("<div>").addClass("time-block row");
    var hourLable = $("<p>").addClass("hour");
    var textEntry = $("<textarea>").addClass("description");
    var saveBtn = $("<button>").addClass("saveBtn").text("Save");
    let timeDisplayed = i + 9;
    let stringI = timeDisplayed.toString();
    let idAssign = "block"+stringI;
    let iterateHour = moment(stringI, "k");
    let currentHour = moment().format("k");


    //Clones and appends the neccessary elements to the time block storage


    hourForm.attr("number", i);
    hourForm.append(hourLable.text(iterateHour.format("hA")));
    hourForm.append(textEntry);
    hourForm.append(saveBtn);
    hourForm.attr("id", idAssign);
    

    //variable reassignment 
    //idAssign = $("#" + idAssign);
    iterateHour = iterateHour.format("k");
    
    //decides the color and sets the appropriate tasks based on whether the hour-block is current, present or future
    if (currentHour > iterateHour) {
        hourForm.addClass("past");
    }
    else if (currentHour < iterateHour) {
        hourForm.addClass("future");
    }
    else {
        hourForm.addClass("present");
    } 
    $("#block-storage").append(hourForm);
    console.log(iterateHour);
    console.log(currentHour);

    //sets the users saved input up
}
//$("#block0").remove();

saveBtn.click(function(){
    parentNumber = saveBtn.parent().attr("number");
    alert(parentNumber);
});