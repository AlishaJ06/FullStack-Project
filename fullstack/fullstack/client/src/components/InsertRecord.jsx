import React, { useState } from "react";

import axios from "axios";
import { API_URL } from "../constants";

/**
 * 
 *  SAT Results
- Name (Unique Identifier)
- Address
- City
- Country
- Pincode
- SAT score
- Passed - this needs to be calculated in the backend as follows - if SAT score > 30% = Pass else Fail
 */

const InsertRecord = () => {
  const [satResults, setSatResults] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
    satScore: "",
  });

  const handleChange = (e) => {
    setSatResults((prevSatResults) => {
      const updatedField = { [e.target.name]: e.target.value };
      console.log({ ...prevSatResults, ...updatedField });
      return { ...prevSatResults, ...updatedField };
    });
  };

  const insertRecord = async () => {
    console.log("inserting record...");
    try {
      const response = await axios.post(API_URL + "/insert", satResults);
      // console.log(response.data);
      alert("Record inserted successfully");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <>
      <div>
        <h1>SAT Results</h1>
        <input
          placeholder="Name"
          name="name"
          value={satResults.name}
          onChange={handleChange}
        />
        <input
          placeholder="Address"
          name="address"
          value={satResults.address}
          onChange={handleChange}
        />
        <input
          placeholder="City"
          name="city"
          value={satResults.city}
          onChange={handleChange}
        />
        <input
          placeholder="Country"
          name="country"
          value={satResults.country}
          onChange={handleChange}
        />
        <input
          placeholder="Pincode"
          name="pincode"
          value={satResults.pincode}
          onChange={handleChange}
        />
        <input
          placeholder="SAT score"
          name="satScore"
          value={satResults.satScore}
          onChange={handleChange}
        />
      </div>
      <button onClick={insertRecord} style={{ margin: "30px" }}>
        Add record
      </button>
    </>
  );
};

export default InsertRecord;
