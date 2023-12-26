import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const UpdateScore = () => {
  const [update, setUpdate] = useState({ name: "", satScore: "" });

  const handleChange = (e) => {
    setUpdate((prev) => {
      const updatedField = { [e.target.name]: e.target.value };
      console.log({ ...prev, ...updatedField });
      return { ...prev, ...updatedField };
    });
  };

  const updateScore = async () => {
    console.log("updating score...");
    try {
      const response = await axios.post(API_URL + "/update-score", update);
      alert("Score updated successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="Name"
          name="name"
          value={update.name}
          onChange={handleChange}
        />
        <input
          placeholder="SAT score"
          name="satScore"
          value={update.satScore}
          onChange={handleChange}
        />
      </div>
      <button onClick={updateScore} style={{ margin: "30px" }}>
        Update score
      </button>
    </div>
  );
};

export default UpdateScore;
