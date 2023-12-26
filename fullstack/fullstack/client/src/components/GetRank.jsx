import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const GetRank = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const getRank = async () => {
    console.log("getting rank...");
    try {
      const response = await axios.get(API_URL + "/get-rank?name=" + name);
      alert(name + "'s rank is " + response.data.rank);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={handleChange} />
      <button onClick={getRank} style={{ margin: "30px" }}>
        Get Rank
      </button>
      <p></p>
    </div>
  );
};

export default GetRank;
