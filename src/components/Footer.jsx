import React from "react";

function Footer() {
    const isLoggedIn = true;
    const bgColor = (isLoggedIn) ? 'wheat' : 'red'; 
    return (
        <footer style={{width: '100%', backgroundColor: bgColor}} 
                className="footer">
             <p> 
                 &copy; CholeCode  "This is the end of the page on Components and Props!"
             </p>
        </footer>
    )
}



export default Footer;