# CodeDrills TODO list


------  ***  Client *** --------

1. API: update userdata (put) should be with username not id

1. lastQuizData should be a date object, not a string

5. Styled Components: mostly all working again--need to look at registration component.  There are some sub-structures I don't understand that are using htmlFor={prop} syntax that don't make sense to me.  I want to understand it before I blow it away.

1. Freepik avatar attribution:  
<a href='https://www.freepik.com/free-vector/decorative-social-media-business-blog-users-profile-avatar-trendy-hairstyle-design-icons-collection-isolated-flat-vector-illustration_1158625.htm'>Designed by Freepik</a>

1. Find some avatars that will work for user avatars.

1. Store gets updated after each quiz, however each profile load overwrites the global state with userData from the database.  Sooooo, gonna need to update remote db and complete that operation before re-fetching the userData from the mongodb.

1. Make sure quiz data is getting updated remotely and is being used to update the database.

2. Add user auth and register to include email to schema

3. Where are the user photos/avatars going to go?  Where can user upload selfie to?

4. Figure out how to combine user info and quiz data so correct data for each user shows up on page.  
Probably will have to work over data schemas for relevant database endpoints.  Have a skeleton for new users.

------ *** API *** ----------

1. userData endpoint, userData Schema  lastQuizData.dateOfQuiz should be a date object, not a string

5. Figure out how best to let the user create questions for his/her own account that others will not see,
but that he/she will see when taking tests.

1. Need to export the user list to a json file so the db.users can be updated from a file, both to a local db as well as to mlabs.





WRAPUP from Matthew:

Responsive
- CodeDrills too big
- Latest Stats tab, graph needs to be enlarged [CHART.JS PROBLEM I THINK] 
- Fix alert to fit within the dimensions of a phone, this may need to be a modal
[fixed on iphone--alert translates after ios 7.01]

General 
[not fixed yet]- App styles multiple answers for the same question as if answered; only style one answer 
[fixed]- Show profile info (e.g. name, email, etc...) as text only, not as inputs or a form 
[fixed]- Remove borders from profile info (e.g. name, email, etc...) 
- Make Fname and Lname for username guest to hold real-world values
- Add text on profile only after a quiz is taken that says something like "These are that
[fixed]- Add brief text to each tab on profile explaining to the user what information they are looking at
[fixed]- Style the login and register with a little more zing (e.g. buttons)
[no thank you]- Add background to nav bar to make it stick out more
Nice-to-haves
- modal after quiz with text saying you did great or not so great and stats for the last quiz taken. Add button that allows user to continue to profile after seeing modal.
- Replace text in footer with icons (see thenounproject.com) 
