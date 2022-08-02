import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MyButton from "./components/MyButton/MyButton";
import MyAccordion from "./components/MyAccordion/MyAccordion";

const accordionData = [
  {
    id: 0,
    summary: "Basic Accordion #1 Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 1,
    summary: "Basic Accordion #2 Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 2,
    summary: "Basic Accordion #3 Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 3,
    summary: "Basic Accordion #4 Summary",
    detail: "Basic Accordion Detail.",
  },
];

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

      <div style={{ display: "block", width: 600, marginTop: 20 }}>
        {accordionData.map((tab) => (
          <MyAccordion key={tab.id} summary={tab.summary} detail={tab.detail} />
        ))}
      </div>
    </>
  );
}

export default App;
