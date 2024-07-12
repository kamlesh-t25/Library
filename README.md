# Online Library Management Website

A comprehensive solution for managing an online library, including features for user authentication, book catalog management, borrowing, returning books, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Testing](#testing)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

Welcome to the Online Library Management Website, a comprehensive solution designed to facilitate efficient borrowing and returning of books between students and the library. Our platform aims to streamline library operations by offering a user-friendly interface for students and administrators alike. With features such as user authentication, book catalog management and our system ensures a seamless and organized approach to managing library resources. Whether you are a student looking to borrow a book or a librarian managing the inventory, our website provides the tools you need to make the process smooth and hassle-free.

## Features

- User authentication and authorization
- Book catalog management (add, update, delete books)
- Book borrowing and returning system
- Search functionality
- User account management
- Admin dashboard


## Technologies, Libraries and Packages Used

### FRONTEND : 

- `HTML`
- `CSS`
- `JavaScript`
- `BootStrap`
- `Tailwind`
- `REACT`
- `FontAwesome`
- `Ionicons`
- `React Icons`

### BACKEND : 

- `ExpressJS`
- `NodeJS`
- `Nodemon`
- `Bcrypt`
- `Axios`
- `JsonWebToken`
- `CORS`
- `Dotenv`

### DATABASE :

- `MongoDB

## Getting Started

Instructions to get a copy of the project up and running on your local machine for development and testing purposes.


## Project Structure
```
online-library-management/
├── backend/                        
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/                    
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Context/
│   │   └── App.js
│   ├── index.html
│   ├── main.js
│   └── vite.config.js
├── admin_panel/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Context/
│   │   └── App.js
│   ├── index.html
│   ├── main.js
│   └── vite.config.js
├── README.md
```


## Demo Videos

You can watch the demo videos of the eLibrary project here: 
- https://drive.google.com/drive/folders/165Ta1-MH3ZhUEslp8cndHPsutpWftXKz?usp=sharing


## Local Setup

- Make sure you start backend server first so you can get data from dataBase in frontend and admin_panel .

### Frontend:

- `Step 1:` Open your terminal and navigate to the desired directory where you want to place your source code.

- `Step 2:` Run the following command to clone the repository: `git clone https://github.com/kamlesh-t25/Library.git`.

- `Step 3:` Navigate to the frontend directory: `cd frontend`.

- `Step 4:` Initialize the project and install dependencies by running the following commands in your terminal:`npm init -y` and then `npm install`.

- `Step 5:` Start the client side of elibrary by running the following command in terminal:`npm run dev`.

### Backend:

- `Step 1:` Open your terminal and navigate to the desired directory where you want to place your source code.

- `Step 2:` Run the following command to clone the repository: `git clone https://github.com/kamlesh-t25/Library.git`.

- `Step 3:` Navigate to the backend directory: `cd backend`.

- `Step 4:` Initialize the project and install dependencies by running the following commands in your terminal:`npm init -y` and then `npm install`.

- `Step 5:` Start the server side of elibrary by running the following command in terminal:`nodemon server.js`.

### Admin-Panel:

- `Step 1:` Open your terminal and navigate to the desired directory where you want to place your source code.

- `Step 2:` Run the following command to clone the repository: `git clone https://github.com/kamlesh-t25/Library.git`.

- `Step 3:` Navigate to the frontend directory: `cd admin-panel`.

- `Step 4:` Initialize the project and install dependencies by running the following commands in your terminal:`npm init -y` and then `npm install`.

- `Step 5:` Start the admin side of elibrary by running the following command in terminal:`npm run dev`.

- Credentials for admin login -> email :- "220010025@iitdh.ac.in" , password : - "123456789"



## Project Overview

## Frontend:

- **Route Protection:** All routes are protected using a token stored in local storage. If the token exists, the route is accessible; otherwise, users are redirected to the login page.
  
- **Notification Handling:** The toast library is used for displaying notification alerts.

- **User Options on Landing (/):** 
  - Users can log in if they are registered.
  - New users can register.
  - Forgot password functionality is provided.

- **Sign Up Page:** 
  - Users enter their name and institute's email ID.
  - Email with OTP verification is sent using nodemailer.
  - Name and email ID are sent to the backend for OTP verification.

- **Setup Password Page:** 
  - After OTP verification, users set a password and register their account.

- **Reset Password Page:** 
  - Users enter their registered email ID to receive an OTP for password reset.
  - After OTP verification, users can set a new password.

- **Sign In Page:** 
  - Registered users can log in.
  - Successful login stores a token in local storage for subsequent access.

- **Home Page:** 
  - Divided into Navbar, Header, Category Area, and Footer.
  - **Navbar:** Contains website name, cart, orders, user profile icon, and logout button.
  - **Header:** Displays a welcome message with the user's name and an image.
  - **Category Area:** Displays category cards with an "Explore Category" button leading to the Book Page,where books corresponding to that category will be displayed.
  - **Footer:** Institute information and communication details, including weather information.

- **Book Page:** 
  - Displays books based on selected categories.
  - Filter cards for sub-categories and a search bar for text-based filtering.
  - A serach bar is also available that can be used to get books via book title.
  - Each book card includes details like title, description, author, copies available, and an "Add to Cart" button.

- **Cart Page:** 
  - Displays books added to the cart.
  - Each book card in the cart has options to remove or request the book from the admin.

- **Orders Page:** 
  - Displays requested books and books assigned by admin.
  - Book reminder timer for return deadlines.
  - Button to return assigned books and increase the count in the database.


### Backend:

- We have defined models for users, books, and orders. For the admin panel, we are not using any model. Instead, we are directly connecting our backend to MongoDB to retrieve the required information (email and password) for login, which is defined in "server.js".

- We are connecting backend to database using url in "./confi/db.js" and "server.js".

- We have defined three models -userModel , orderModel and bookModel.

- The models are located in a folder named "models." Their functions, specifying how they work on particular routes, are defined in the "routes" folder, and the route names are in the "controllers" folder. These components are all combined in "server.js."

- The OrderModel is connected to each user via the userId, which is stored as _id in OrderModel. The BookModel is used for updating, deleting, or adding books in the database.
- In books data we added one extra field "category" so we can seperate books according to category name.

- Both Frontend and admin_panel are connected to backend via URL="http://localhost:4000" that is provided in context.js file .


### Admin Panel:

- *For admin access, new users cannot register through the application. Instead, their entries must be manually added to the database before they can log in to the admin panel.*

- Routes are protected using localStorage and state hooks, ensuring a user session duration of 1 hour. Upon login, the timestamp is stored in localStorage. The admin will be automatically logged out either after 1 hour or upon manual logout.

- We have used the toast library to handle notification alert popups.
- Admin will log in using the credentials provided. The password will be matched from the database to allow the user to access the dashboard of the admin panel.

- Users can navigate through the admin panel using a sidebar. They can go to the User Details , dashboard, My Store, Add Book,Order Management( Order Requests,Approved Orders, delayOrders  ) or log out using the logout button, all present under the sidebar of the dashboard.

- In user details section,we have provided a button with every user detail using that admin can delete a particular user completely.

- In the delayOrders section , a button is provided with each delay book entry, by clicking it you can send a reminder email to that student about book retun.

- The dashboard is the home page of the admin panel.
- My Store contains all book cards that are in the database. Each card has the book name, description, author, copies available, and a delete button to remove the book from the database. This page also contains a search bar so that the admin can filter out books based on book title matches.

- We have a sidebar option labeled "User Details" that displays registered user information. Each user item includes a delete button, which will remove all their data from both the OrderModel and UserModel.

- Add Book contains a form through which the admin can add a book to the database so that users can access new books.

- Order Requests contains book requests made by all users. The admin can reject or accept the user's request to issue the book to the user.
