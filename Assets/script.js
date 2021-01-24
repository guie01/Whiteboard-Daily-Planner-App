// --- Generate new times blocks ---- //
let timeBlockCollection = []
let timesArr= ["9","10", "11", "12", "1", "2", "3", "4", "5"]; 

for (let i=1; i<timesArr.length; i++){
    let newTimeBlockEL= $("#9AM").clone();
    newTimeBlockEL.attr("id", timesArr[i]); 
    newTimeBlockEL.children(".row").attr("style", "white-space: pre-Wrap"); 
    newTimeBlockEL.children(".row").children(".hour").text(timesArr[i] + " AM");
    newTimeBlockEL.children(".row").children(".saveBtn").attr("data-hour", timesArr[i]); 
    newTimeBlockEL.appendTo(".container");

    var currentTime = moment().format("hh");

    if(timesArr[i] > currentTime){
      $(".description").attr("style", "background-color: #fc665e");
    } else if (currentTime == timesArr[i]){
        $(".description").attr("style", "background-color: #ff6961");
    } else if(timesArr[i < currentTime]){
        $(".description").attr("style", "background-color: ##77dd77");
    }
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


