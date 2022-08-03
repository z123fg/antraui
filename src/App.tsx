import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyButton from './components/MyButton/MyButton';
import MyDrawer from './components/MyDrawer/MyDrawer'


function App() {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {/* <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" disabled>SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="default" variant="outlined" >SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" >SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" disabled>SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" >SUBMIT</MyButton> */}
      <h1>Something</h1>
      <MyDrawer onClick={()=>{console.log("clicked drawer")}}></MyDrawer>
    </div>
  );
}

export default App;
