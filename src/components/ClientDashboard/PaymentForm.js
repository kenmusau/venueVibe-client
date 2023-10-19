import React from "react";
import "./PaymentForm.css";

function PaymentForm({ totalAmount, onClose }) {
  const handlePaymentSubmit = () => {
    // Simulate payment processing (replace with actual payment integration)
    console.log("Payment processed successfully!");
    onClose(); // Close the modal after successful payment
  };

  return (
    <div className="payment-form">
      <h1>Payment</h1>
      <p>Total Amount: KSH {totalAmount}</p>{" "}
      {/* Replace with actual total amount */}
      <label>Card Number:</label>
      <input type="text" placeholder="Card Number" />
      <label>Expiry Date:</label>
      <input type="text" placeholder="MM/YY" />
      <label>CVC:</label>
      <input type="text" placeholder="CVC" />
      <button className="payment-btn btn-submit" onClick={handlePaymentSubmit}>
        Submit Payment
      </button>
    </div>
  );
}

export default PaymentForm;
