import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MyButton from "./components/MyButton/MyButton";
import MyDrawer from "./components/MyDrawer/MyDrawer";

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MyButton
          onClick={() => {
            console.log("clicked");
          }}
          color="primary"
          variant="contained"
          disabled
        >
          SUBMIT
        </MyButton>
        <MyButton
          onClick={() => {
            console.log("clicked");
          }}
          color="default"
          variant="outlined"
        >
          SUBMIT
        </MyButton>
        <MyButton
          onClick={() => {
            console.log("clicked");
          }}
          color="secondary"
          variant="text"
        >
          SUBMIT
        </MyButton>
        <MyButton
          onClick={() => {
            console.log("clicked");
          }}
          color="secondary"
          variant="text"
          disabled
        >
          SUBMIT
        </MyButton>
        <MyButton
          onClick={() => {
            console.log("clicked");
          }}
          color="primary"
          variant="contained"
        >
          SUBMIT
        </MyButton>
      </div>
      <div className="drawer">
        <MyDrawer direction="left"></MyDrawer>
        <MyDrawer direction="right"></MyDrawer>
        <MyDrawer direction="bottom"></MyDrawer>
        <MyDrawer direction="top"></MyDrawer>
      </div>
    </div>
  );
}

export default App;
