# CRM Application

This basic Customer Relationship Management (CRM) application allows users to manage customer data through a command-line interface. It provides basic CRUD operations (Create, Read, Update, Delete) for customer records stored in a MongoDB database.

## Features
- **Create a Customer:** Add a new customer with a name and age.
- **View All Customers:** Display a list of all customers with their IDs, names, and ages.
- **Update a Customer:** Modify the name and age of an existing customer by ID.
- **Delete a Customer:** Remove a customer from the database by ID.
- **Quit:** Exit the application and close the database connection.

## Technologies Used
- **Node.js:** JavaScript runtime for building the application.
- **Mongoose:** ODM library for MongoDB and Node.js.
- **prompt-sync:** Synchronous prompt for user input in the CLI.
- **dotenv:** Loads environment variables from a `.env` file.

## Setup Instructions
### Clone the Repository:
```bash
git clone https://github.com/your-repo/crm-app.git
cd crm-app
```

### Install Dependencies:
```bash
npm install
```

### Set Up Environment Variables:
Create a `.env` file in the root directory with:
```makefile
MONGODB_URI=mongodb://localhost:27017/crmdb
```
Replace `crmdb` with your preferred database name.

### Run the Application:
```bash
node app.js
```

## Interact with the Menu:
- Choose an option (1-5) to perform CRUD operations.
- Follow the prompts to input data as needed.

## Project Structure
- `app.js`: Main application file handling user interaction and database operations.
- `models/customer.js`: Mongoose schema and model for the Customer collection.
- `.env`: Environment variables (not tracked in version control).

## Usage
- **Create a Customer:** Enter the customer’s name and age when prompted.
- **View All Customers:** Displays all customers in the format `id: <id> -- Name: <name>, Age: <age>`.
- **Update a Customer:** Select a customer by ID and provide a new name and age.
- **Delete a Customer:** Remove a customer by ID.
- **Quit:** Safely disconnects from MongoDB and exits.

## Error Handling
- Handles invalid inputs, missing data, and database connection errors gracefully.
- Validates that customer names are provided and ages are numeric.

## Requirements
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

