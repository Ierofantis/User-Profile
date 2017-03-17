# User-Profile
An interface made on Express.js, Angular, Ejs, Bootstrap and JS
(Read The Documentation below for further information)

![alt tag](https://i.imgur.com/T7ZfZvs.jpg)

# Review the app locally

If you want to test the app locally then download the zip file from this repository
unzip it on your PC and then open your command line on the specific location that you 've
unzipped the folder.

Then run npm install(Make sure that you have installed on your PC npm and node) to install 
the modules from package.json

When the installation is over then type on your command line node server or simply nodemon

# Review the app globally

You can se my app live on https://registration-form.herokuapp.com/

# Documentation
# User Stories

1)Landing Page(Login Page)

You will sumbit the form with the following credentials:John & 1234(placeholders).
If the credentials are false then the user will not redirect to the user's profile page

2)Profile page

The user profile page will show the user available fields, such as:

•	First name
•	Last name
•	Card number (assume that the users have a unique 9-digit card number)
•	Email
•	Mobile number
•	Gender

If the user click on any field(link) of the form he can update the static information.

There is validation in the frontend(card number, email, mobile number) that shows errors if the 
format is wrong.

For the moment the buttons are not active Except the Show Address button that shows a modal dialog with 
the user's address information.

Initially the fields are empty but when you fill them then you can click the Update My Address button and then 
the the data is going to be saved on a database(there is no database at the moment) and the user will see his address on the map.

3)Database and MVC

At the moment there is no database but I have add the two main Schemas on the Models folder.
For scalability reasons I 've used MVC architecture.

5)Cross Browsing Test

This app is tested and working on:

Internet Explorer, Mozzilla Firefox, Chrome, Opera, Safari

4)Tools

I have used ExpressJs for backend and EJS template engine,Angular,Vanilla JS and jQuery for the frontend.



