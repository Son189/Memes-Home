import React from "react";
import "./Home.css"
/*import sk from "./images/skull.jpg"*/

function Home(){
    return(
<div className="container">
  <div className = "p">
    <h1>LAUGH FACTORY</h1>
   <p>Welcome to the home of memes where joy becomes a reality</p>
       </div>
    <div className="b1">
     <centre>
     <button id="create" className="btn btn-outline-info ms-2"><Link to="/memegen" >Create a Meme </Link></button>
      </centre> 
       </div>
        </div>
    )
}
export default Home