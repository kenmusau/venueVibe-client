import React from "react";
import "./BookingModal.css";
function BookingModal({ onClose, onCancel }) {
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
        </div>
        <div className="booking-modal-footer">
          <button className="booking-btn btn-submit">Submit</button>
          <button className="booking-btn btn-cancel" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
