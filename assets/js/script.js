

// Wrap all code that interacts with the DOM in a call to jQuery 
$(document).ready(function() {
  
  // *Add a listener for click events on the save button. 
  $(".saveBtn").on("click", function() {
    var btnNum = $(this).parent().attr("id");
    var textInside = $(this).siblings('textarea').val();
    localStorage.setItem(btnNum, textInside);
  });

  // * Add code to display the current date in the header of the page.
  const now = dayjs();
  $('#currentDay').text(now.format('dddd MMMM D, YYYY'));

  // * Add code to apply the past, present, or future class to each time
  milTime = now.format('HH')
  console.log('mil time is ' + milTime + typeof milTime)
  //for each in jquery
   
  
  
  $("div[id^='hour'").each(function() {
    // console.log the array created by split;
    const planHour = this.id.split('-');
    // console.log(planHour)
    console.log(parseInt(milTime), parseInt(planHour[1]))
    if (parseInt(milTime) === parseInt(planHour[1])){
      $(this).addClass('present')
    } else if (parseInt(milTime) > parseInt(planHour[1])){
      $(this).addClass('past')
    } else {
      $(this).addClass('future')
    }
  })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  //loop through local storage
  for (var i= 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    if (key.startsWith('hour')){
    const splitKey = key.split('-')
    keyNum = parseInt(splitKey[1])
    $("div[id^='hour']").each(function() {
      const planHour = parseInt(this.id.split('-')[1]);
      if (planHour == keyNum) {
      console.log(planHour, keyNum, 'ding!')
      console.log(localStorage.getItem(key))
      console.log($(this).find('textarea').val(localStorage.getItem(key)));
      }
    });
  }};
});





  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

// psudo code from class
//  Calendar App

// Read from localStrorage
//  Populate page with data if exists in localStorage

// click event with delegation to target the text area assoc with the save button
// use the sibling DOM method to traverse the DOM, event.target parent/sibling
//  capture the value of the text area, save string to local storage 

// Use Dayjs to get current time use military time
// read the value of the time block from the html
// if statement that compares the vales and adds a class to change the color
// loop through html elements and read a data-attribute time