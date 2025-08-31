import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css"; // minimal CSS for sign-in form

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add backend call / authentication logic here
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form id="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
      <p>
        Don&apos;t have an account? <Link to="/">Sign Up</Link>
      </p>
    </div>
  );
}
