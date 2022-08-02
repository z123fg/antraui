import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MySwich from './components/MySwitch/MySwitch';



function App() {
  return (
    <>
      <div>Disabled and checked</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwich checked={true} />
        <MySwich />
        <MySwich disabled checked={true} />
        <MySwich disabled />
      </div>
      <div>Add label</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwich checked={true} label={"Label"} />
        <MySwich disabled label={"Disabled"} />
      </div>
      <div>Different size</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwich checked={true} size="small" />
        <MySwich checked={true} />
      </div>
      <div>Different Colors</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwich checked={true} />
        <MySwich checked={true} color="secondary" />
        <MySwich checked={true} color="warning" />
        <MySwich checked={true} color="default" />
      </div>
      <div>Callback function (would print click)</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwich checked={true} onChange={() => console.log("click")} />

      </div>
    </>
  );
}

export default App;
