//global variable assignment
var inputArray = [];
var currentHour = moment().format("k");
//retrieves content from the local storage
var savedArray = JSON.parse(localStorage.getItem("savedArray"));

//checks to make sure the array is not null before assigning it.
if(savedArray != null){
    inputArray = savedArray;
}

//outputs the current day at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Displays the elements on the page by creating a timeblock for each hour in the day and appending the required elements to it.
for (let i=0; i<9; i++) {
    //variable assignment
    var hourForm = $("<div>").addClass("time-block row");
    var hourLable = $("<p>").addClass("hour pl-3 mb-0");
    var textEntry = $("<textarea>").val(inputArray[i]).addClass("description input-block-level col-sm");
    var saveBtn = $("<button>").addClass("saveBtn justify-content-end ml-auto").text("Save");
    let timeDisplayed = i + 9;
    let stringI = timeDisplayed.toString();
    let idAssign = "block"+stringI;
    let iterateHour = moment(stringI, "k");
    let hourText = iterateHour.format("hA")

    //Adds two spaces infront of the text if the lable is only three characters to make the lables even.
    if (hourText.length < 4){
        hourText = "  " + hourText;
    }
    
    //Clones and appends the neccessary elements to the time block storage
    saveBtn.attr("number", i);
    hourForm.append(hourLable.text(hourText));
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

    //sets the users saved input up and saves the input to the proper spot in the array
    saveBtn.click(function(){
        btnNum = $(this).attr("number");
        console.log(btnNum + " saved to local storage");
        inputArray[btnNum] = $(this).siblings("textarea").val();
        savedArray = JSON.stringify(inputArray);
        localStorage.setItem("savedArray", savedArray);
    });
}
