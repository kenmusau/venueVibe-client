import React, { useContext, useState } from "react";
import "./BookingModal.css";
import { ClientContext } from "../../context/ClientContext";
import { baseUrl } from "../../utils";
import PaymentForm from "./PaymentForm";
import { ScaleLoader } from "react-spinners";
// import Notification from "./Notification";
// import Swal from "sweetalert2";

function BookingModal({
  onClose,
  onCancel,
  spaceId,
  spaceAmount,
  setNotification,
  updateSelectedSpace,
}) {
  const { client } = useContext(ClientContext);
  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const [bookingInfo, setBookingInfo] = useState({
    check_in: "",
    check_out: "",
  });

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const updateSpaceStatus = () => {
    setIsLoading(true);
    fetch(`${baseUrl}/spaces/${spaceId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log("space status updated successfully", data);
        updateSelectedSpace(data);
      });
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
    setIsLoading(true);
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
        setNotification("Booking successfully submitted!");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        // Handle the response from the server
        console.log("Booking created:", data);
        setBookingData(data);
        setIsPaymentStep(true);
        updateSpaceStatus();
        // Swal.fire("Submission successful!");
        // onClose(); // Close the modal after successful booking
      })
      .catch((errors) => {
        // setErrors(error);
        console.error("Error creating booking:", errors.errors.errors);
      });
  };
  console.log(bookingData);

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
          <p
            className="booking-modal-close"
            onClick={isPaymentStep ? null : () => onClose()}
          >
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
            disabled={isPaymentStep}
          />
          <label>Check-out:</label>
          <input
            type="date"
            name="check_out"
            value={bookingInfo.check_out}
            onChange={handleChange}
            min={minDate()}
            disabled={isPaymentStep}
          />
          {!checkInAfterCheckout ? (
            <div>
              <p className="booking-amount-status">
                <span>Total Amount:</span> Ksh{" "}
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
              <p>Submit to complete payment</p>
            </div>
          ) : (
            <p className="booking-dates-warning">
              Checkin date comes before checkout date.
            </p>
          )}
        </div>
        <div className="booking-modal-footer">
          {isPaymentStep ? (
            <PaymentForm
              totalAmount={calculateTotalAmount(
                spaceAmount,
                bookingInfo.check_in,
                bookingInfo.check_out
              )}
              onClose={onClose}
              bookingData={bookingData}
              setNotification={setNotification}
            />
          ) : (
            <>
              <button
                className={
                  isSubmitDisabled || checkInAfterCheckout
                    ? "booking-Not-Available"
                    : "booking-btn"
                }
                onClick={handleBookingSubmit}
                disabled={isSubmitDisabled || checkInAfterCheckout}
              >
                {isLoading ? <ScaleLoader height={8} color="#fff" /> : "Submit"}
              </button>
              <button
                className="booking-btn btn-cancel"
                onClick={() => onCancel()}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
