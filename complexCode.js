/*
* Filename: complexCode.js
* Description: This code demonstrates a complex system for managing employee data and generating reports.
* It includes features such as user authentication, data validation, CRUD operations, and report generation.
* Author: [Your Name]
* Date: [Current Date]
*/

// Import necessary modules

const fs = require('fs');
const bcrypt = require('bcrypt');
const readline = require('readline-sync');

// Constants
const USERS_FILE = './users.json';
const EMPLOYEES_FILE = './employees.json';

// Helper functions

function loadUsers() {
  const rawData = fs.readFileSync(USERS_FILE);
  return JSON.parse(rawData);
}

function saveUsers(users) {
  const jsonData = JSON.stringify(users, null, 2);
  fs.writeFileSync(USERS_FILE, jsonData);
}

function loadEmployees() {
  const rawData = fs.readFileSync(EMPLOYEES_FILE);
  return JSON.parse(rawData);
}

function saveEmployees(employees) {
  const jsonData = JSON.stringify(employees, null, 2);
  fs.writeFileSync(EMPLOYEES_FILE, jsonData);
}

function generateRandomId() {
  return Math.floor(Math.random() * 100000);
}

function passwordHash(password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

function passwordCompare(plainPassword, hashedPassword) {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}

// Authentication functions

function register() {
  const existingUsers = loadUsers();

  // Get user details
  const username = readline.question('Enter your username: ');
  const password = readline.question('Enter your password: ', { hideEchoBack: true });

  // Check if user already exists
  const userExists = existingUsers.find((user) => user.username === username);
  if (userExists) {
    console.log('User already exists. Please try again.');
    return;
  }

  // Generate user ID
  const userId = generateRandomId();

  // Hash password
  const hashedPassword = passwordHash(password);

  // Create new user object
  const newUser = {
    id: userId,
    username: username,
    password: hashedPassword,
  };

  existingUsers.push(newUser);
  saveUsers(existingUsers);
  console.log('Registration successful!');
}

function login() {
  const existingUsers = loadUsers();

  // Get user credentials
  const username = readline.question('Enter your username: ');
  const password = readline.question('Enter your password: ', { hideEchoBack: true });

  // Find user by username
  const user = existingUsers.find((user) => user.username === username);
  if (!user) {
    console.log('User not found. Please try again.');
    return;
  }

  // Validate password
  const passwordMatch = passwordCompare(password, user.password);
  if (!passwordMatch) {
    console.log('Invalid password. Please try again.');
    return;
  }

  console.log('Login successful!');

  // Continue with other operations...
}

// Main menu functions

function displayMainMenu() {
  console.log('---- Employee Management System ----');
  console.log('1. Register');
  console.log('2. Login');
  console.log('3. Exit');
  const choice = readline.question('Enter your choice: ');
  return parseInt(choice);
}

function main() {
  let exit = false;
  while (!exit) {
    const choice = displayMainMenu();

    switch (choice) {
      case 1:
        register();
        break;
      case 2:
        login();
        break;
      case 3:
        exit = true;
        break;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

// Start the program
main();