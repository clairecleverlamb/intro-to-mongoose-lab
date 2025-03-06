const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Customer = require('./models/customer')
const prompt = require('prompt-sync')();

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
}

connect();

const showMenu = () => {
  console.log('\nWelcome to the CRM');
  console.log('what would you like to do? ');
  console.log('  1. Create a customer');
  console.log('  2. View all customers');
  console.log('  3. Update a customer');
  console.log('  4. Delete a customer');
  console.log('  5. Quit');
}


const createCustomer = async () => {
    const name = prompt('Enter customer name: ');
    const age = prompt('Enter customer age: ');
    const customer = new Customer({name, age});
    await customer.save();

    console.log(`Customer ${name} created successfully`);
};


const viewCustomer = async () => {
    try { 
      const customers = await Customer.find({});
      console.log("All Customers: ", customers);
    } catch (error) {
        console.error(error.message)
    }
}

const updateCustomer = async () => {
    const id = prompt('Copy and paste the id of the customer you would like to update here: '); //"67c96e73e6715f9d23db43f5";
    const newName = prompt('What is the customers new name? ')  // Bilbo
    const newAge = prompt('What is the customers new age? ')    // 50 

    // await customer.save();
    const updatedCustomer = await Customer.findByIdAndUpdate(
        id, 
        {name: newName, age: newAge},  
        {new: true}
    );
    console.log("Updated customer: ", updatedCustomer);
    // await viewCustomer();
}


const deleteCustomer = async () => {
    const id = prompt('Copy and paste the id of the customer you would like to update here: ');
    const result = await Customer.findByIdAndDelete(id);
    if (!result) {console.log("Customer not found"); }
    else {console.log("Customer deleted"); }
}


const handleUserChoice = async (choice) => {
    switch (choice) {
        case '1' : await createCustomer(); break;
        case '2' : await viewCustomer(); break; 
        case '3' : await updateCustomer(); break;
        case '4' : await deleteCustomer(); break;
        case '5' : console.log('exiting...'); await mongoose.disconnect(); process.exit(0); break;
        default: console.log("Invalid choice.")
    }
}

const main = async () => {
    await connect();
    while(true){
        showMenu();
        const choice = prompt('Number of action to run: ');
        await handleUserChoice(choice);
    }
};
main();


