let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
    
};
setInterval(displayTime, 1000);
displayTime()

$(document).ready(function() {


$(".save-button").on("click", function(){
    const hour = $(this).parent().attr("id")
    console.log(hour)
    const input = $(this).parent().siblings(".task").val();
    console.log(input)
    localStorage.setItem(hour, input);
})


// Create reference for every .task class and change the innerHTML (hint: .val() is your friend) to the localStorage value with the same id 
//      (eg, the hour-9 value from localStorage should go in the appropriate input field).

});
/*

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

* Each timeblock contains an input field and save button.

* Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

* The current day is displayed at the top of the calendar.

* Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

PSEUDO CODE

// function to display date and time at the top of page

create a button with event listener to save to local storage
when the button is clicked, triggers function that stores input in local storage






// get the element that the info goes into
// decide on what it should look like
// and then update it
// should this run in a loop and update the clock regularly?


// create timeblocks with inputs and buttons
// loop and dynamically 
// add events to the submit button to save what is in the input field to local storage
// get the value out of local storage and populate the input with the data

// check to see what the color of the input should be based on the time using moment??
// look at existing CSS for classes already listed

// store data in localstorage as an object where the key is the hour of the day
// ex.
// {
    9: "",
    10: "",
    11: "", ...and so on....
}

// brian did that thing today with an array...look up in resources




## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
*/
