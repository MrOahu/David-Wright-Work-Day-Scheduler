// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function(){
  var divId = $(this).parent().attr("id")
  var textarea = $(this).siblings(".description").val()

    localStorage.setItem(divId, textarea)
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $("#09 .description").val(localStorage.getItem("09"))
  $("#10 .description").val(localStorage.getItem("10"))
  $("#11 .description").val(localStorage.getItem("11"))
  $("#12 .description").val(localStorage.getItem("12"))
  $("#13 .description").val(localStorage.getItem("13"))
  $("#14 .description").val(localStorage.getItem("14"))
  $("#15 .description").val(localStorage.getItem("15"))
  $("#16 .description").val(localStorage.getItem("16"))
  $("#17 .description").val(localStorage.getItem("17"))

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().format("HH") 
  console.log(currentHour)

  $(".time-block").each(function(){
    var timeblockId = $(this).attr("id")

    if(timeblockId < currentHour){
      $(this).addClass("past")
    }
    else if (timeblockId == currentHour){
        $(this).addClass("present")
    }
    else {
      $(this).addClass("future")
    }
  })

  // TODO: Add code to display the current date in the header of the page.
  //get current time
  var currentDayJS = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  // insert time into html
$("#currentDay").text(currentDayJS)

});
