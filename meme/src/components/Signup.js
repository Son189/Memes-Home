import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Signup({setIsLoggedIn}){
   const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    username:'',
    email: "",
    password: "",
    confirmpassword:''
  });
  let navigate = useNavigate();
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
        setIsLoggedIn(true)
        navigate("/login");
    }
    return (
        <div>
            <div className="img-t">
          <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <center>
      <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          id="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          id="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <label htmlFor="username">Confirm Password</label>
        <input
          type="password"
          placeholder="confirm password"
          name="confirmpassword"
          id="confirmppassword"
          onChange={handleChange}
          value={formData.confirmpassword}
        />
        <br/>
        <button type="submit" className="btn btn-outline-warning">Submit</button>
        </center>
      </form>
      </div>
        </div>
    )
}
export default Signup;