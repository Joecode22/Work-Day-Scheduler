# Work-Day-Scheduler
Add important events to a daily planner
# Work Day Scheduler

## Add important events to a daily planner

This challenge assignment begins with starter code of a simple scheduling app and implements requested feature functionality in JavaScript. In this exercise I used jQuery to traverse the DOM. An event listener handles the click functionality and stores text content into local storage. The current date is placed at the top of the page, and the text areas colors are styled by assigning a class name dynamically based on a comparison of the div id with the current hour. Local storage is queried on load/refresh and the contents are appropriately allocated to the correct text area based on a comparison of the local storage key and the division id. One cool new thing that I learned during this exercise is that arrays can be iterated through using a more concise forEach method.

## Built Using

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [jQuery](https://jqueryui.com/)
- [Day.js](https://day.js.org/)
- [Bootstrap 5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

Below is a short video of the appearance and functionality of this application:
![Work-Day-Schedular Application Behavior](https://github.com/Joecode22/Work-Day-Schedular/blob/main/assets/images/app.gif "Work-Day-Schedular Application Behavior")

## User Story

- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively

## Acceptance Criteria

- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with time blocks for standard business hours
- WHEN I view the time blocks for that day
- THEN each time block is color-coded to indicate whether it is in the past, present, or future
- WHEN I click into a time block
- THEN I can enter an event
- WHEN I click the save button for that time block
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

## Installation

There is no installation requirement

## Usage

This project is deployed on github pages.
Follow this link to view: <https://joecode22.github.io/PasswordGenerator/>

## Credits

This project assignment began with starter code provided from the following repository:
<https://github.com/coding-boot-camp/friendly-parakeet>
The README for this project incorporates text from the project challenge assignment README from class.

## License

Please refer to the license section

## Features

Some key features of this application include:

1. Items are stored into local storage and persist though reload/refresh.
2. Date and time are handled using the Day.js JavaScript library.
3. Loops are used to adhere to DRY principles.
4. Local Storage keys are checked to ensure they start with 'hour' to avoid accidentally pulling storage left over from another site.
5. Comparisons are made between the div id text and the current time and each textarea div is colored gray: for past, red: for present, and green: for future hours.
