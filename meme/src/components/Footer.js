import React from "react";
import fb from './images/fb.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import "./Footer.css";

function Footer(){
    return(
        <div className="main-footer">
        <div className="container main-footer-container">
        <h3 className="name">Lord of the Memes</h3>
        <ul className="nav footer-nav">
            <li><a href="https://www.facebook.com/"><img src={fb} alt='fb'/></a></li>
            <li><a href="https://www.instagram.com/"><img src={insta} alt='insta'/></a></li>
            <li><a href="https://www.linkedin.com/"><img src={linkedin} alt='linkedin'/></a></li>
            <li> <a href="https://twitter.com/"><img src={twitter} alt='twitter'/></a></li>
        </ul>
   </div>
   <p></p>
   </div>
    )
}
export default Footer