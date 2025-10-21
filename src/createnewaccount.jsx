import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "./context/AuthContext";

const USERS_DB_KEY = "consultHubUsers";

function CreateAccount() {
  const navigate = useNavigate(); 
  const auth = useAuth(); 
  const [password, setPassword] = useState("");
  
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (length = 12) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let out = "";
    for (let i = 0; i < length; i++) {
      out += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(out);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setError(""); 

    if (!name || !email || !password || !industry || !contact) {
      setError("Please fill out all fields.");
      return;
    }

    const signupSuccess = auth.signup({
      name,
      industry,
      email,
      contact,
      password,
    });

    if (signupSuccess) {
      navigate("/login");
    } else {
      setError("An account with this email already exists.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f0ff 60%, #3265d3ff 100%)",
      }}
    >
      <div
        className="card shadow p-5"
        style={{
          minWidth: 420,
          background: "#f5faff",
          borderRadius: "20px",
          border: "none",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#222",
            fontFamily: "'Segoe Script', 'Comic Sans MS', cursive, sans-serif",
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: "2.2rem",
          }}
        >
          Create New Account
        </h2>
        <form onSubmit={handleCreateAccount}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              User Name / Company Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              Industry / Specialization
            </label>
            <input
              list="industries"
              className="form-control"
              placeholder="e.g., Healthcare, Finance, Software"
              style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
            <datalist id="industries">
              <option value="Software / IT" />
              <option value="Healthcare" />
              <option value="Finance" />
              <option value="Education" />
              <option value="Manufacturing" />
              <option value="Consulting" />
            </datalist>
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              Email ID
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="e.g., example@email.com"
              style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="e.g., 9876543210"
              style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
              maxLength={15}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              Password
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Generate or enter a password"
                style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => generatePassword(12)}
                style={{ borderColor: "#b3c6e0" }}
              >
                Generate
              </button>
            </div>
            <div className="form-text" style={{ color: "#3265d3ff" }}>
              Tip: use a mix of letters, numbers & symbols.
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 mt-3"
            style={{
              background: "#3265d3ff",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: 1,
              fontSize: "1.1rem",
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;