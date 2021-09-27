//global variable assignment
var inputArray = [];
var currentHour = moment().format("k");

//outputs the current day at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Displays the elements on the page by creating a timeblock for each hour in the day and appending the required elements to it.
for (let i=0; i<9; i++) {
    //variable assignment
    var hourForm = $("<div>").addClass("time-block row");
    var hourLable = $("<p>").addClass("hour");
    var textEntry = $("<textarea>").addClass("description");
    var saveBtn = $("<button>").addClass("saveBtn").text("Save");
    let timeDisplayed = i + 9;
    let stringI = timeDisplayed.toString();
    let idAssign = "block"+stringI;
    let iterateHour = moment(stringI, "k");
    
    //Clones and appends the neccessary elements to the time block storage
    saveBtn.attr("number", i);
    hourForm.append(hourLable.text(iterateHour.format("hA")));
    hourForm.append(textEntry);
    hourForm.append(saveBtn);
    hourForm.attr("id", idAssign);
    
    //changes the time format to a number for comparision and idAssign for easier assignment
    iterateHour = iterateHour.format("k");
    idAssign = $("#" + idAssign);
    
    //decides the color based on whether the hour-block is current, present or future
    if (currentHour < iterateHour  && iterateHour != 9) {
        hourForm.addClass("future");
    }
    else if (currentHour === iterateHour) {
        hourForm.addClass("present");
    }
    else {
        hourForm.addClass("past");
    } 
    $("#block-storage").append(hourForm);
    console.log(iterateHour);
    console.log(currentHour);
    console.log(currentHour > 9);

    //sets the users saved input up and saves the input to the proper spot in the array
    saveBtn.click(function(){
        btnNum = $(this).attr("number");
        console.log(btnNum);
        inputArray[btnNum] = $(this).siblings("textarea").val();
    });
}

