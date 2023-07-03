import "../css/Login.css";
import React, { useState } from "react";



export function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };
  const isFormValid = email.trim() !== '' && password.trim() !== '';
  return (
    <form className="bg-primary-subtle" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
        Iniciar Sesión
      </button>
    </form>
  );
}
