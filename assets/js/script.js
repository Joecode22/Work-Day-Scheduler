//Challenge Assignment Module 05
//Work Day Scheduler
//Joseph McKinney
//04/15/2023

// Wrap all code that interacts with the DOM in a call to jQuery 
$(document).ready(function() {
  // *Add a listener for click events on the save button.
  // grabs the id of the parent element
  // grabs the text content of the sibling element
  // stores these two things into local storage
  $(".saveBtn").on("click", function() {
    var btnNum = $(this).parent().attr("id");
    var textInside = $(this).siblings('textarea').val();
    localStorage.setItem(btnNum, textInside);
  });

  // * Add code to display the current date in the header of the page.
  // creates the variable now and assigns it the output of the dayjs() query
  const now = dayjs();
  // jquery code for find the element with an id of 'currentDay'
  // and then go get the current date using dayjs
  // and set it as the text content of the requested element
  $('#currentDay').text(now.format('dddd MMMM D, YYYY'));

  // * Add code to apply the past, present, or future class to each time
  milTime = now.format('HH')
  console.log('mil time is ' + milTime + typeof milTime)
  //for each in jquery
  $("div[id^='hour'").each(function() {
    //grab the id, then split it into an array using '-' as the divisor
    const planHour = this.id.split('-');
    // compares the div's hour with the 'HH' formatted output of the dayjs
    // adds appropriate class based on past, present, or future
    if (parseInt(milTime) === parseInt(planHour[1])){
      $(this).addClass('present')
    } else if (parseInt(milTime) > parseInt(planHour[1])){
      $(this).addClass('past')
    } else {
      $(this).addClass('future')
    }
  })
  
  // * Gets items from local storage and loads the text area of the divs that match the appropriate hour
  //for loop in JavaScript to loop through the items in local storage
  for (var i= 0; i < localStorage.length; i++){
    //grab the key
    const key = localStorage.key(i);
    //check to see if it is the key we want
    //split the key into an array with the '-' as the divisor
    //compare the key with the div id 
    //and if they match, get the value from local storage
    //go find an element of type textarea
    //write the value in local storage to the text area  
    if (key.startsWith('hour')){
    const splitKey = key.split('-')
    keyNum = parseInt(splitKey[1])
    $("div[id^='hour']").each(function() {
      const planHour = parseInt(this.id.split('-')[1]);
      if (planHour == keyNum) {
      console.log(planHour, keyNum, 'ding!')
      console.log(localStorage.getItem(key))
      $(this).find('textarea').val(localStorage.getItem(key));
      }
    });
  }};
});