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
