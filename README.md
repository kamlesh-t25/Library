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





## Local Setup

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


## Project Overview

## Frontend:

- All routes have been protected using a token that is stored in local storage. We use a function that checks for the token in local storage. If the token exists, the function returns the route; otherwise, it redirects to the login page.
- We have used the toast library to handle notification alert popups.
- Users have options when they land on the `/` route. They can either log in directly if they are registered users, or they can register if they are new to our platform. A forgot password page is also provided if the user forgets their password.
- **Sign Up page:** Users must enter their name and institute's email ID to receive an email for OTP verification. The email is sent using the `nodemailer` package. The name and email ID are sent to the backend in an array to match the OTP generated in the backend.
- **Setup Password page:** Once the OTP is verified, the user is supposed to set a password for their account and register the account.
- **Reset Password page:** Users are supposed to enter the registered email ID to receive an OTP to reset the password. Once the OTP is verified, the user can set up a new password.
- **Sign In page:** Once the user has registered successfully, they can log in to the website using their credentials. After a successful login, a token will be stored in local storage so that the next time the user accesses the `/` route, they will be redirected to the home page of the website.
- **Home Page:** 


### Backend:
We have defined models for users, books, and orders. For the admin panel, we are not using any model. Instead, we are directly connecting our backend to MongoDB to retrieve the required information (email and password) for login, which is defined in "server.js".

The models are located in a folder named "models." Their functions, specifying how they work on particular routes, are defined in the "routes" folder, and the route names are in the "controllers" folder. These components are all combined in "server.js."

The OrderModel is connected to each user via the userId, which is stored as _id in OrderModel. The BookModel is used for updating, deleting, or adding books in the database.

Both Frontend and admin_panel are connected to backend via **URL="http://localhost:4000"** that is provided in context.js file .

### Admin Panel:

- All routes have been protected using a React state hook.
- We have used the toast library to handle notification alert popups.
- Admin will log in using the credentials provided. The password will be matched from the database to allow the user to access the dashboard of the admin panel.
- Users can navigate through the admin panel using a sidebar. They can go to the dashboard, My Store, Add Book, Order Requests, or log out using the logout button, all present under the sidebar of the dashboard.
- The dashboard is the home page of the admin panel.
- My Store contains all book cards that are in the database. Each card has the book name, description, author, copies available, and a delete button to remove the book from the database. This page also contains a search bar so that the admin can filter out books based on book title matches.
- Add Book contains a form through which the admin can add a book to the database so that users can access new books.
- Order Requests contains book requests made by all users. The admin can reject or accept the user's request to issue the book to the user.
- The admin will be logged out once the page is refreshed.