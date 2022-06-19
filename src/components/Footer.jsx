import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';


function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    );
  }
    
export default Footer;