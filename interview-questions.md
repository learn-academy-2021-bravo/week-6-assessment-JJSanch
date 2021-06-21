# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be part of the animal model.  The foreign key would link the two models

  Researched answer: The foreign key links the animal and the sightings model.  The foreign key belongs to the sightings modelm and links it to the animal model. To create a the foreign key, one would use the command FOREIGN KEY (column name) REFERENCES Table Name(column name).



2. Which RESTful routes must always be passed params? Why?

  Your answer: Delete and Destroy

  Researched answer: delete, /photos/:id, /:id, photos#, destory.
  These routes must be passed params to manage what goes in and out of the database and to keep unwanted information out of the database.



3. Name three rails generator commands. What is created by each?

  Your answer: 
               gem install rails - this installs the rails directory structure

               rails server - this allows you to access your app through a browser

               db:migrate - this migrates changes you made to the a rails databse

  Researched answer: 
                     rails db:create - sets up an empty databse

                     rails new app_name - generates new folder with enture Rails 
                     directory sructure.  All code needed to run app is included in this command

                     rails generate rseource - sets up a migration and a model needed to use something as an ActiveRecord class



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

  a. method="GET"    /students   

    Controller method is index.  This will display a list of all students     

  b.method="GET"    /students/2  

    Controller method is show. Displays the second student on the list

  c. method="GET"    /students/new

    Controller method is new.  Returns an HTML form for creating a new student.

  d. method="GET"    /students/edit/2    

    Controller method is edit.  Returns a form for editing the second student on the list.

  e. method="POST"   /students/       

    Controller method is create.  This would create a new student.

  f. method="PATCH"  /students/2      

    Controller method is update.  This would update information on the second student on the students list.

  g. method="DELETE" /students/2    

    Controller method is destroy.  This would delete a specific a student from the list.



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

  1. As a user, I can see a landing page when navigating to the app 

  2.  As a user, I can navigate from the landing page to the home page

  3.  As a user, I can create or delete to-do lists on the home page

  4.  As a user, I can click on "create to-do lists" and be routed to a page where I can create a new to do list

  5. As a user, I can click on already created to do lists to either delete or edit them

  6. As a user, I can see a form to create a new to do list.

  7. As a user, I can naivgate out of the form and back to the home page.

  8. As a user, I can click on a button that will save my created to do list.

  9. As a user, I can click on a button that will edit an existing to do list.

  10. As a user, I can click on the title of the app at the top of the screen and be routed to the app home page.
