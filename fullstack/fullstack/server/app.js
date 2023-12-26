// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
/////////////////////////////////////////////////////////////////////////////////////////////

const records = [
  {
    name: "John",
    address: "123 Main St",
    city: "City1",
    country: "Country1",
    pincode: "12345",
    satScore: "30",
    isPassed: false,
  },
  {
    name: "Jane",
    address: "456 Oak St",
    city: "City2",
    country: "Country2",
    pincode: "56789",
    satScore: "20",
    isPassed: true,
  },
  {
    name: "Bob",
    address: "789 Pine St",
    city: "City3",
    country: "Country3",
    pincode: "10111",
    satScore: "10",
    isPassed: true,
  },
  // Add more objects as needed
];

const printRecords = () => {
  console.log("printing records");
  for (let index = 0; index < records.length; index++) {
    console.log(records[index]);
  }
};

app.post("/insert", (req, res) => {
  let found = false;
  records.forEach((record, index) => {
    if (record.name === req.body.name) {
      records[index].satScore = satScore;
      found = true;
    }
  });

  if (found) {
    return res
      .status(500)
      .send({ statusText: "A record with the given name already exists" });
  }

  const record = req.body;

  record.isPassed = parseInt(record.satScore, 10) > 30;
  records.push(record);
  records.sort(
    (r1, r2) => parseInt(r2.satScore, 10) - parseInt(r1.satScore, 10)
  );

  res.status(200).send({
    statusText: "Record inserted succesfully",
  });
});

app.get("/view-all", (req, res) => {
  res.status(200).send({
    statusText: "OK",
    records: records,
  });
});

app.get("/get-rank", (req, res) => {
  const name = req.query.name;
  // console.log(name);

  let found = false;
  records.forEach((record, index) => {
    if (record.name === name) {
      found = true;

      res.status(200).send({
        statusText: "OK",
        rank: index + 1,
      });
    }
  });

  if (!found) {
    res.status(500).send({
      statusText: "No record found with given name",
    });
  }
});

app.post("/update-score", (req, res) => {
  console.log("body:" + req.body.score);
  const name = req.body.name;
  const satScore = req.body.satScore;

  let found = false;
  records.forEach((record, index) => {
    if (record.name === name) {
      records[index].satScore = satScore;
      found = true;
    }
  });

  if (!found) {
    res.status(500).send({
      statusText: "No record found with given name",
    });
  } else {
    records.sort(
      (r1, r2) => parseInt(r2.satScore, 10) - parseInt(r1.satScore, 10)
    );
    printRecords();

    res.status(200).send({
      statusText: "Score updated successfully",
    });
  }
});

app.delete("/delete-record", (req, res) => {
  console.log("delete...");
  const name = req.query.name;

  let indexToDelete = -1;
  records.forEach((record, index) => {
    if (record.name === name) {
      indexToDelete = index;
    }
  });

  if (indexToDelete == -1) {
    res.status(500).send({
      statusText: "No record found with given name",
    });
  } else {
    records.splice(indexToDelete, 1);
    records.sort(
      (r1, r2) => parseInt(r2.satScore, 10) - parseInt(r1.satScore, 10)
    );
    printRecords();

    res.status(200).send({
      statusText: "Record deleted successfully",
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
