import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MyButton from "./components/MyButton/MyButton";
import MyAccordionParent from "./components/MyAccordion/parent/MyAccordionParent";


function App() {


  return (
    <>
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

      <MyAccordionParent />
    </>
  );
}

export default App;
