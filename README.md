# Work Day Scheduler
This website is designed to help an employee plan their day. It allows the employee to save events for the hours in a standard workday. The site can be accessed [here.](https://zachary-berdell-elliott.github.io/day-planner/)
![Image showing the site.](./assets/images/site-image.png)

## Original site
The site originally just had a css stylesheet and html document. The document included links to bootstrap, jquery, and moment.js. It also had a title and a spot to store the time blocks.

## Site layout
The site includes a header with a title and a subtitle. Under that the current day is listed. There is then a section below that with standard business hours that the user can write and save events to.

## Event saving
Times are fetched and written using moment js. The user can write an element in the block and save an event to it by clicking the save button. The event will then be saved in the users local storage.

## Time block styling
The timeblocks will be color according to whether the hour is in the past present or future. The blocks are grey for past, red for present, and green for future.
