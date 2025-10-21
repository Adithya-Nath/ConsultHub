import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f0ff 60%, #3265d3ff 100%)",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          minWidth: 370,
          background: "#f5faff",
          borderRadius: "18px",
          border: "none",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{ color: "#3265d3ff", fontWeight: 700, letterSpacing: 1 }}
        >
          Login
        </h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              Username / Email ID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username or email"
              style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#3265d3ff" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              style={{ background: "#e3f0ff", borderColor: "#b3c6e0" }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              background: "#3265d3ff",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Submit
          </button>
        </form>

        <button
          className="btn btn-link mt-3 w-100"
          style={{
            color: "#3265d3ff",
            textDecoration: "underline",
            fontWeight: 500,
            fontSize: "1rem",
          }}
          onClick={() => navigate("/create-account")}
        >
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;