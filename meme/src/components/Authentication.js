import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
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
        navigate("/");
    }
  return (
    <div>
      <div className="img-y">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
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
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}
export default Authentication;