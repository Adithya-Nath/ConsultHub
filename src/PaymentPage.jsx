import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // State for success/error message

  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
  });

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleBankChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStatus(null); // Reset status on new payment attempt

    // Simulate 3 seconds payment process
    setTimeout(() => {
      setIsProcessing(false);
      // Set a success status instead of using alert()
      setPaymentStatus("success");

      // Redirect to home page after showing the success message for 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 8000);
    }, 8000);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 className="text-center text-primary mb-4">Complete Your Payment</h3>

        {/* Display success message here */}
        {paymentStatus === "success" && (
          <div className="alert alert-success text-center" role="alert">
            Payment Successful! Your registration request has been sent to the admin.Please wait!! Redirecting back to home page...
          </div>
        )}

        <div className="d-flex justify-content-center mb-3 gap-2">
          {/* ERROR FIXED: className was missing backticks for template literal */}
          <button
            className={`btn ${
              paymentMethod === "card" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            Debit / Credit Card
          </button>
          <button
            className={`btn ${
              paymentMethod === "netbanking"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setPaymentMethod("netbanking")}
          >
            Internet Banking
          </button>
        </div>

        <form onSubmit={handlePayment}>
          {paymentMethod === "card" ? (
            <>
              <div className="mb-3">
                <label className="form-label">Card Holder Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="cardHolder"
                  placeholder="Enter name on card"
                  value={cardDetails.cardHolder}
                  onChange={handleCardChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="cardNumber"
                  placeholder="Enter card number"
                  maxLength="16"
                  pattern="\d{16}"
                  title="Card number must be 16 digits."
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="month"
                    className="form-control"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardChange}
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    name="cvv"
                    placeholder="***"
                    maxLength="3"
                    pattern="\d{3}"
                    title="CVV must be 3 digits."
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label className="form-label">Bank Name</label>
                <select
                  className="form-select"
                  name="bankName"
                  value={bankDetails.bankName}
                  onChange={handleBankChange}
                  required
                >
                  <option value="">Select Bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="Axis">Axis Bank</option>
                  <option value="Canara">Canara Bank</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Account Holder Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="accountHolder"
                  placeholder="Enter account holder name"
                  maxLength="16"
                  value={bankDetails.accountHolder}
                  onChange={handleBankChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="accountNumber"
                  placeholder="Enter account number"
                  maxLength="17"
                  pattern="\d+"
                  title="Account number must contain only digits."
                  value={bankDetails.accountNumber}
                  onChange={handleBankChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">IFSC Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="ifsc"
                  placeholder="Enter IFSC Code"
                  maxLength="11"
                  value={bankDetails.ifsc}
                  onChange={handleBankChange}
                  required
                />
              </div>
            </>
          )}

          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div
                  className="spinner-border text-light"
                  role="status"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <span className="visually-hidden">Processing...</span>
                </div>
              ) : (
                "Pay Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
