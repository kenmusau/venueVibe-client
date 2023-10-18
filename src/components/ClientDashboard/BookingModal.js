import React, { useContext, useState } from "react";
import "./BookingModal.css";
import { ClientContext } from "../../context/ClientContext";
import { baseUrl } from "../../utils";

function BookingModal({ onClose, onCancel, spaceId, spaceAmount }) {
  const { client } = useContext(ClientContext);

  const [bookingInfo, setBookingInfo] = useState({
    check_in: "",
    check_out: "",
  });

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const calculateTotalAmount = (pricePerDay, checkInDate, checkoutDate) => {
    if (!checkInDate || !checkoutDate) {
      return 0;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const checkIn = new Date(checkInDate);
    const checkout = new Date(checkoutDate);

    // Calculate the difference in days
    const diffDays = Math.ceil(Math.abs((checkout - checkIn) / oneDay));

    // If the difference is 0 (same day booking), set it to 1 day
    const numDays = diffDays === 0 ? 1 : diffDays;

    return numDays * pricePerDay;
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setBookingInfo({
      ...bookingInfo,
      [name]: value,
    });
  }

  const handleBookingSubmit = () => {
    // Calculate total amount
    const totalAmount = calculateTotalAmount(
      spaceAmount,
      bookingInfo.check_in,
      bookingInfo.check_out
    );

    console.log(totalAmount);

    fetch(`${baseUrl}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bookingInfo,
        status: true,
        space_id: spaceId,
        client_id: client.data.id,
        amount: totalAmount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Booking created:", data);
        // onClose(); // Close the modal after successful booking
      })
      .catch((errors) => {
        // setErrors(error);
        console.error("Error creating booking:", errors.errors.errors);
      });
  };

  const isSubmitDisabled = !bookingInfo.check_in || !bookingInfo.check_out;
  const checkInAfterCheckout =
    bookingInfo.check_in && bookingInfo.check_out
      ? new Date(bookingInfo.check_in) > new Date(bookingInfo.check_out)
      : false;
  return (
    <div
      className="booking-modal-container"
      onClick={(e) => {
        if (e.target.className === "booking-modal-container") onClose();
      }}
    >
      <div className="booking-modal">
        <div className="booking-modal-header">
          <p className="booking-modal-close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="booking-modal-content">
          <h1>Booking space</h1>
          <label>Check-in:</label>
          <input
            type="date"
            value={bookingInfo.check_in}
            name="check_in"
            onChange={handleChange}
            min={minDate()}
          />
          <label>Check-out:</label>
          <input
            type="date"
            name="check_out"
            value={bookingInfo.check_out}
            onChange={handleChange}
            min={minDate()}
          />
          <p>
            Total Amount: Ksh{" "}
            {isNaN(
              calculateTotalAmount(
                spaceAmount,
                bookingInfo.check_in,
                bookingInfo.check_out
              )
            )
              ? 0
              : calculateTotalAmount(
                  spaceAmount,
                  bookingInfo.check_in,
                  bookingInfo.check_out
                )}
          </p>
        </div>
        <div className="booking-modal-footer">
          <button
            className={
              isSubmitDisabled || checkInAfterCheckout
                ? "booking-Not-Available"
                : "booking-btn"
            }
            onClick={handleBookingSubmit}
            disabled={isSubmitDisabled || checkInAfterCheckout}
          >
            Submit
          </button>
          <button className="booking-btn btn-cancel" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
