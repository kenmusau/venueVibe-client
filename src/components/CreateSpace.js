import React from "react";
import { baseUrl } from "../utils";
import { useForm } from "react-hook-form";
import "./CreateSpace.css"; // Import your CSS file

function CreateSpace() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("location", data.location);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("contact", data.number);
    formData.append("image", data.image[0]);
    formData.append("admin_id", 1);
    formData.append("status", false);

    fetch(`${baseUrl}/spaces`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Space status updated successfully", data);
      });
  };

  return (
    <div className="create-space-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" {...register("name")} />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          {...register("location")}
        />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" {...register("price")} />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" {...register("image")} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          {...register("description")}
        />
        <label htmlFor="contact">Contact</label>
        <input type="number" name="number" id="number" />
        <button className="submit-button">Submit</button>{" "}
      </form>
    </div>
  );
}

export default CreateSpace;
