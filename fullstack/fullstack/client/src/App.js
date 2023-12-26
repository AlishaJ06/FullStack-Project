import { useState } from "react";
import InsertRecord from "./components/InsertRecord";
import ViewAll from "./components/ViewAll";
import GetRank from "./components/GetRank";
import UpdateScore from "./components/UpdateScore";
import DeleteRecord from "./components/DeleteRecord";

const getBtnObj = (title) => {
  return {
    title: title,
  };
};

const btnData = [
  getBtnObj("Insert Record"),
  getBtnObj("View All"),
  getBtnObj("Get Rank"),
  getBtnObj("Update score"),
  getBtnObj("Delete Record"),
];

function App() {
  const [operation, setOperation] = useState("");

  let componentToRender;

  switch (operation) {
    case "1":
      componentToRender = <InsertRecord />;
      break;
    case "2":
      componentToRender = <ViewAll />;
      break;
    case "3":
      componentToRender = <GetRank />;
      break;
    case "4":
      componentToRender = <UpdateScore />;
      break;
    case "5":
      componentToRender = <DeleteRecord />;
      break;
    default:
      componentToRender = <div>Invalid operation</div>;
  }

  return (
    <div>
      <h1>asdada</h1>

      <div style={{ textAlign: "center" }}>
        {btnData.map((data, index) => {
          return (
            <button
              key={index}
              style={{ margin: "6px" }}
              onClick={() => {
                setOperation((index + 1).toString());
              }}
            >
              {data.title}
            </button>
          );
        })}

        {componentToRender}
      </div>
    </div>
  );
}

export default App;
