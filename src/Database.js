


import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/contactList", { useNewUrlParser: true });

const contactsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
})

const Contact = mongoose.model("Contact", contactsSchema);


