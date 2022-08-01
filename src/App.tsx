import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyButton from './components/MyButton/MyButton';
import Checkbox from './components/Checkbox/Checkbox';



function App() {
  return (
    <>
      <div style={{display:"flex", gap:"10px"}}>
        <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" disabled>SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="default" variant="outlined" >SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" >SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" disabled>SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" >SUBMIT</MyButton>
      </div>
      <div style={{display:"flex", gap:"10px"}}>
        <Checkbox onClick={()=>{console.log("clicked")}} color="primary" variant="contained" disabled />
        <Checkbox onClick={()=>{console.log("clicked")}} color="default" variant="outlined" />
        <Checkbox onClick={()=>{console.log("clicked")}} color="secondary" variant="text" />
        <Checkbox onClick={()=>{console.log("clicked")}} color="secondary" variant="text" disabled />
        <Checkbox onClick={()=>{console.log("clicked")}} color="primary" variant="contained" />
      </div>
    </>
  );
}

export default App;
