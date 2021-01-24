// --- Generate new times blocks ---- //
let timeBlockCollection = []


let timesArr= ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]; 

for (let i=1; i<timesArr.length; i++){
    let newTimeBlockEL= $("#9AM").clone();
    newTimeBlockEL.attr("id", timesArr[i]); 
    newTimeBlockEL.children(".row").attr("style", "white-space: pre-Wrap"); 
    newTimeBlockEL.children(".row").children(".hour").text(timesArr[i]);
    newTimeBlockEL.children(".row").children(".saveBtn").attr("data-hour", timesArr[i]); 
    newTimeBlockEL.appendTo(".container"); 
}


// ---- Functionality of the save button ---- //

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    // alert("Task saved!");

    var dataHour = $(event.target).attr("data-hour");

    var targetTimeBlock = $("#"+dataHour);
    var targetInputText = targetTimeBlock.children(".row").children(".description").val();

    console.log(dataHour + ": " + targetInputText)

    var timeBlock = {
        time: dataHour,
        input: targetInputText
    };

    timeBlockCollection.push(timeBlock);


    var dailyTask = $(".description").val();
    localStorage.setItem('userInput', JSON.stringify(timeBlockCollection));
    
});

// $(".description").text(localStorage.getItem('userInput'));

console.log(moment().format())

