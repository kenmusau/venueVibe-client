// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ProfileModal.css";
function ProfileModal({ onCancel, onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, e.g., update user profile
    console.log(data);
  };
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
          <form
            className="profile-update-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input-field"
              type="text"
              {...register("username")}
              placeholder="Username"
            />
            <input
              className="input-field"
              type="text"
              {...register("first_name")}
              placeholder="First Name"
            />
            <input
              className="input-field"
              type="text"
              {...register("last_name")}
              placeholder="Last Name"
            />
            <input
              className="input-field"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
            <input
              className="input-field"
              type="password"
              {...register("password_digest")}
              placeholder="Password"
            />
            <input
              className="input-field"
              type="text"
              {...register("profile_picture")}
              placeholder="Profile Picture URL"
            />
            <button className=" submit-button" type="submit">
              Update Profile
            </button>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn profile-btn-submit">Submit</button>
          <button className="btn profile-btn-cancel" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
