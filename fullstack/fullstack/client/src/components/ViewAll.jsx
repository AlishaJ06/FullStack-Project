import React, { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";

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

const ViewAll = () => {
  const [config, setConfig] = useState({
    columnDefs: [
      { headerNName: "Name", field: "name" },
      { headerName: "Address", field: "address" },
      { headerName: "City", field: "city" },
      { headerName: "Country", field: "country" },
      { headerName: "Pincode", field: "pincode" },
      { headerName: "SAT score", field: "satScore" },
    ],
  });

  const [records, setRecords] = useState([]);

  useEffect(() => {
    viewAll();
  }, []);

  const viewAll = async () => {
    console.log("view all");
    try {
      const response = await axios.get(API_URL + "/view-all");
      console.log(response.data);
      setRecords(response.data.records);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>All Records</h1>

      <div
        className="ag-theme-quartz"
        style={{
          height: "500px",
          // width: "600px",
        }}
      >
        <AgGridReact
          columnDefs={config.columnDefs}
          rowData={records}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default ViewAll;
