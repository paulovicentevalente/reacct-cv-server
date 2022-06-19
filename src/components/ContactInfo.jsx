import React, { useState , useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function ContactInfo() {
   
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    const [contacts, setContacts] = useState([]);

    function handleAddContacts(event) {

        event.preventDefault();

        if (contact.fName !== "") {
            setContacts(prevContacts => [...prevContacts, contact]);
            alert(contact.fName + " is subscribed!");
        }
        else if (contact.lName !== "") {
            setContacts(prevContacts => [...prevContacts, contact]);
            alert(contact.lName + " is subscribed!");
        }
        else if (contact.email !== "") {
            setContacts(prevContacts => [...prevContacts, contact]);
            alert(contact.email + " is subscribed!");
        }
        else
        alert(" Nothing was subscribed!");

    };

    function handleChange(event) {

        const { name, value } = event.target;

        setContact((prevValue) => {

            if (name === "firstName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                };
            } else if (name === "lastName") {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                };
            } else if(name==="e-mail"){
                return {
                    
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value

                };
            }

        });

   

    }

    

    useEffect(() => { console.log(contacts)}, [contacts]);

    return (


        <div className="container">
                
            <h3 className="big-heading" >Go ahead {contact.fName} {contact.lName}, contact me by subscribing below,</h3>

            <p>{contact.email}</p>

            <form>

                <input
                    onChange={handleChange}    
                    name="firstName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}    
                    name="lastName"
                    value={contact.lName}
                    placeholder="Last Name"               
                />
                <input
                    onChange={handleChange}    
                    name="e-mail"
                    value={contact.email}
                    placeholder="E-mail"                     
                />
                <button type="button" onClick={handleAddContacts} >Subscribe</button>
                <h3 className="big-heading" >...or using Linkedin by pressing <ArrowCircleRightIcon fontSize = "medium" color="primary"/><a aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/" target="_blank"><LinkedInIcon color="primary" fontSize = "large"/></a>!</h3>

            </form>

        </div>
    );
}

export default ContactInfo;