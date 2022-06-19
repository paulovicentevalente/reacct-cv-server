import React, {useState} from "react";

import Navbar from "./Navbar";
import Title from "./Title";
import Experience from "./Experience";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
import { PropaneSharp } from "@mui/icons-material";
import menuItem from "../htmlTextsEnglish";

function App() {



    return (
        <div>
            <section className="class-section" id="title">
                <div className="container-fluid">  
                    <Navbar 
                        




                    Navbar/>
                    <Title />
                </div>
            </section>

            <section className="class-section" id="experience">
                <div className="container-fluid">  
                    <Experience />
                </div>
            </section>

            <section className="class-section" id="skills">
                    <Education />
            </section>
            
            <section className="class-section" id="contactInfo">            
                <ContactInfo />
            </section>
            
            <footer className="class-section" id="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;