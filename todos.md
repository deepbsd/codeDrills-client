# CodeDrills TODO list


------  ***  Client *** --------

5. Get styled components going again!

1. Find some avatars that will work for user avatars.

1. Store gets updated after each quiz, however each profile load overwrites the global state with userData from the database.  Sooooo, gonna need to update remote db and complete that operation before re-fetching the userData from the mongodb.

1. Make sure quiz data is getting updated remotely and is being used to update the database.

2. Add user auth and register to include email to schema

3. Where are the user photos/avatars going to go?  Where can user upload selfie to?

4. Figure out how to combine user info and quiz data so correct data for each user shows up on page.  
Probably will have to work over data schemas for relevant database endpoints.  Have a skeleton for new users.

------ *** API *** ----------

5. Figure out how best to let the user create questions for his/her own account that others will not see,
but that he/she will see when taking tests.

1. Need to export the user list to a json file so the db.users can be updated from a file, both to a local db as well as to mlabs.
