// --- Generate new times blocks ---- //


let timesArr= ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]; 

for (let i=1; i<timesArr.length; i++){
    let newTimeBlockEL= $("#time").clone();
    newTimeBlockEL.attr("id", timesArr[i]); 
    newTimeBlockEL.children(".row").attr("style", "white-space: pre-Wrap"); 
    newTimeBlockEL.children(".row").children(".hour").text(timesArr[i]); 
    newTimeBlockEL.appendTo(".container"); 
}



// ---- Functionality of the save button ---- //

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    alert("Task Saved!");

    var dailyTask = $("#inlineFormInput").val();
    localStorage.setItem('userInput', dailyTask);
    
});

$("#inlineFormInput").text(localStorage.getItem('userInput'));