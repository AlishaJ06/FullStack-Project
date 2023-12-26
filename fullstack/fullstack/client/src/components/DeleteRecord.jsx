import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const DeleteRecord = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const deleteRecord = async () => {
    console.log("deleting record...");
    try {
      const response = await axios.delete(
        API_URL + "/delete-record?name=" + name
      );
      alert("Record deleted successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={handleChange} />
      <button onClick={deleteRecord} style={{ margin: "30px" }}>
        Delete record
      </button>
      <p></p>
    </div>
  );
};

export default DeleteRecord;
