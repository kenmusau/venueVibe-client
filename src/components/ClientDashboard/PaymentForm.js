import React from "react";
import "./PaymentForm.css";
import { baseUrl } from "../../utils";

function PaymentForm({ totalAmount, onClose, bookingData }) {
  console.log(bookingData);
  const { id } = bookingData;

  const paymentDate = new Date().toISOString();
  const handlePaymentSubmit = () => {
    // Simulate payment processing (replace with actual payment integration)
    fetch(`${baseUrl}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalAmount,
        status: true,
        booking_id: id,
        payment_date: paymentDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onClose();
      })
      .catch((errors) => {
        // setErrors(error);
        console.error("Error creating booking:", errors.errors.errors);
      });
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
