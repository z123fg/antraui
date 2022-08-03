import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MySwitch from './components/MySwitch/MySwitch';



function App() {
  return (
    <>
      <div>Disabled and checked</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwitch checked={true} />
        <MySwitch />
        <MySwitch disabled checked={true} />
        <MySwitch disabled />
      </div>
      <div>Add label</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwitch checked={true} label={"Label"} />
        <MySwitch disabled label={"Disabled"} />
      </div>
      <div>Different size</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwitch checked={true} size="small" />
        <MySwitch checked={true} />
      </div>
      <div>Different Colors</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwitch checked={true} />
        <MySwitch checked={true} color="secondary" />
        <MySwitch checked={true} color="warning" />
        <MySwitch checked={true} color="default" />
      </div>
      <div>Callback function (would print click)</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <MySwitch checked={true} onChange={() => console.log("click")} />

      </div>
    </>
  );
}

export default App;
