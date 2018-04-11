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
