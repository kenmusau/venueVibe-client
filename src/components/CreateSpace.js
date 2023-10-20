import React, { useState } from "react";
import { baseUrl } from "../utils";

function CreateSpace() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmitSpace = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("status", false);
    data.append("name", "Gates");
    data.append("location", "Nairobi");
    data.append("price", 1);
    data.append(
      "description",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a fuga reprehenderit ratione nemo neque nobis sapiente similique quasi! Accusantium libero facilis tempore non adipisci explicabo, dolore tenetur illo earum?"
    );
    data.append("contact", "contact");

    fetch(`${baseUrl}/spaces`, {
      method: "POST",
      body: data, // Remove the "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Space status updated successfully", data);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmitSpace}>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" onChange={handleChange} />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default CreateSpace;
