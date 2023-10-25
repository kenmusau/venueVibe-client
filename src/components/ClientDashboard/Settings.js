import React, { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import "./Settings.css"; // Import the CSS file
import { baseUrl } from "../../utils";

function Settings() {
  const { client } = useContext(ClientContext);

  const { id, username, first_name, last_name, email, profile_picture } =
    client;

  const [formData, updateFormData] = useState({
    username,
    first_name,
    last_name,
    email,
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
        // Handle success or error as needed.
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <form className="profile-update-form" onSubmit={handleSubmit}>
        {/* User Profile Settings */}
        <label htmlFor="username">Username:</label>
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

        {/* Security and Privacy Settings */}
        <hr />
        <h2>Security & Privacy</h2>
        <label htmlFor="change_password">Change Password:</label>
        <input className="input-field" type="password" name="change_password" />
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input
          className="input-field"
          type="password"
          name="confirm_password"
        />

        {/* Notification Preferences */}
        <hr />
        <h2>Notification Preferences</h2>
        <label>
          <input type="checkbox" name="email_notifications" />
          Receive email notifications
        </label>

        <label>
          <input type="checkbox" name="push_notifications" />
          Receive push notifications
        </label>

        {/* Appearance and Accessibility Settings */}
        <hr />
        <h2>Appearance & Accessibility</h2>
        <label htmlFor="theme">Choose a Theme:</label>
        <select name="theme" className="input-field">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <label>
          <input type="checkbox" name="increase_font_size" />
          Increase Font Size
        </label>

        <button className="submit-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;
