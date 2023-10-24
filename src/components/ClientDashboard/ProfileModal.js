import React, { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import "./ProfileModal.css";
import { baseUrl } from "../../utils";
// import axios from "axios";
function ProfileModal({ onClose }) {
  const { client } = useContext(ClientContext);
  console.log(client.data);
  const {
    id,
    username,
    first_name,
    last_name,
    email,
    password,
    profile_picture,
  } = client?.data;

  const [formData, updateFormData] = useState({
    username,
    first_name,
    last_name,
    email,
    password,
    profile_picture,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    updateFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${baseUrl}/clients/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response.data.data);
        // setClient(response);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") onClose();
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <div className="close" onClick={() => onClose()}>
            &times;
          </div>
        </div>
        <div className="modal-content">
          <form className="profile-update-form" onSubmit={handleSubmit}>
            <label htmlFor="">Username:</label>
            <input
              className="input-field"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label htmlFor="first_name">First Name:</label>
            <input
              className="input-field"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
              className="input-field"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="profile_picture">Profile Picture</label>
            <input
              className="input-field"
              name="profile_picture"
              type="file"
              onChange={handleChange}
            />

            <button className=" submit-button" type="submit">
              Update Profile
            </button>
          </form>
        </div>
        {/* <div className="modal-footer">
          <button className="btn profile-btn-submit">Submit</button>
          <button className="btn profile-btn-cancel" onClick={() => onCancel()}>
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ProfileModal;
