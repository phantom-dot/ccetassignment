import React from "react";
import NavBar from "../components/Navbar/nav"
import Footer from "../components/footer/footer"
import "./notes.css"

function Notes(props) {

    const { title, link, subject, sem } = props;
    return (
        <div className="noteItem">
            <a
                style={{ fontSize: "1.2em" }}
                href={link}
            >
                {title}
            </a>
            <br />
            {subject + "," + sem}
        </div>
    )


}
const dashboard = () => {
    return (
        <>
            <NavBar />

<div className="container">

    <div className="row" id="content" tabIndex="-1">
        <div className="notes">
            <h1>Notes  </h1>
    
        </div>


        {/* {user.map((item)=>{ */}
            
            <Notes title="Introduction to Computer Science" link="/" subject="CSE" sem="2nd" />

         

        {/* })} */}



            </div>



            </div>

            <Footer />
        </>
    );
};

export default dashboard;
