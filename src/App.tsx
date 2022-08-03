import React, { useState, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.scss';
import MyButton from './components/MyButton/MyButton';
import MySwitch from './components/MySwitch/MySwitch';



function App() {
  const [testSwitch, setTestSwitch] = useState<Boolean>(true)
  return (
    <div style={{display:"flex", gap:"10px"}}>
      <MySwitch size={"medium"} color={"primary"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}} label={"Switch Label"}/>
      <MySwitch size={"medium"} color={"secondary"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}} label={"Switch Label"}/>
      <MySwitch size={"medium"} color={"default"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}} label={"Switch Label"}/>
      <MySwitch size={"small"} color={"default"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}} label={"Switch Label"}/>
      <MySwitch size={"medium"} color={"default"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}} label={"Switch Label"} disabled/>

      <MySwitch size={"medium"} color={"primary"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}}/>
      <MySwitch size={"medium"} color={"secondary"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}}/>
      <MySwitch size={"medium"} color={"default"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}}/>
      <MySwitch size={"small"} color={"default"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}}/>
      <MySwitch size={"medium"} color={"default"} checked={testSwitch} onChange={(e: MouseEvent) => {setTestSwitch(!testSwitch)}}/>
    </div>
  );
}

export default App;
