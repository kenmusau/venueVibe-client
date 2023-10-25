import React from "react";
import "./Help.css"; // Import the CSS file

function Help() {
  return (
    <div className="help-page">
      <h1>Help & Support</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search for answers..." />
        <button>Search</button>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Q: How do I book a space?</strong>
            <p>A: To book a space, follow these steps...</p>
          </li>
          <li>
            <strong>Q: Can I cancel a booking?</strong>
            <p>A: Yes, you can cancel a booking by...</p>
          </li>
          <li>
            <strong>Q: What payment methods are accepted?</strong>
            <p>A: We accept payment methods such as...</p>
          </li>
          <li>
            <strong>Q: Is my personal information secure?</strong>
            <p>A: Your personal information is protected using...</p>
          </li>
          <li>
            <strong>
              Q: What should I do if I encounter an issue at the venue?
            </strong>
            <p>A: In case of issues at the venue, please...</p>
          </li>
          {/* Add more FAQs as needed */}
        </ul>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>If you need further assistance, you can contact us at:</p>
        <p>Email: support@example.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
    </div>
  );
}

export default Help;
