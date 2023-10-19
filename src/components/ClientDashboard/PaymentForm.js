import React, { useState } from "react";
import "./PaymentForm.css";
import { baseUrl } from "../../utils";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

function PaymentForm({ totalAmount, onClose, bookingData, setNotification }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  //   console.log(bookingData);
  const { id } = bookingData;

  const paymentDate = new Date().toISOString();

  const handlePaymentSubmit = () => {
    // Simulate payment processing (replace with actual payment integration)
    setIsLoading(true);
    axios
      .post(
        `${baseUrl}/payments`,
        {
          amount: totalAmount,
          status: true,
          booking_id: id,
          payment_date: paymentDate,
          phone_number: phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setIsLoading(false);
        setNotification("Payment successfully!");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        console.log(response.data);
        onClose();
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error creating booking:");
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="payment-form">
      <h1>Payment</h1>
      <p>Total Amount: KSH {totalAmount}</p>{" "}
      {/* Replace with actual total amount */}
      <label>Phone Number:</label>
      <input
        type="text"
        placeholder="254123456789"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {errors.map((error, index) => (
        <p key={index} className="payment-errors">
          {error}
        </p>
      ))}
      <button className="payment-btn btn-submit" onClick={handlePaymentSubmit}>
        {isLoading ? <ScaleLoader height={8} color="#fff" /> : "Pay"}
      </button>
    </div>
  );
}

export default PaymentForm;
