# OKOA Ride
### BEHAVIOUR DRIVEN DEVELOPMENT
1.  **Background:**

* Given the client decides to choose a mechanic prompting the form for submission.

1. **Scenario outline**

* The client enters the full names as required <FullNames>
* The client enters the phone number as required <phoneNumber>
* The client enters the email as required <Email>
* The client enters the location as required <location>
* The client enters the car model as required <carModel>
* The client enters the physical description of the car problem <briefDescription>
* and if the client is finished filling all the data to the form, he/she can submit the form.
1. **Example**
* _|fullnames |phone number |Email |Location |car model |description of the problem_
* _|John Doe |24309948383 |kong@skull.com |Ruiru |Sedan |egine faliure_

1. **Output**
* After filling the form, the client is given an alert with his/her name on the page assuring that the chosen mechanic has been dispatched to the said location.

* The input fields enlarge on click  because we want to serve everyone un biased.