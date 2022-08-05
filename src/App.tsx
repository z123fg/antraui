import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyButton from './components/MyButton/MyButton';
import MyRating from './components/MyRating/MyRating';



function App() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div style={{display: "flex", flexDirection: "row", gap:"10px"}}>
      <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" disabled>SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="default" variant="outlined" >SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" >SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" disabled>SUBMIT</MyButton>
      <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" >SUBMIT</MyButton>
      </div>
      <div style={{display:"flex", flexDirection:"column", border:'1px solid black', width:'fit-content'}}>
        <label>Default Rating</label>
        <MyRating/>
        <label>Normal Rating - Small</label>
        <MyRating 
        onValueChange={(newValue)=>{console.log(newValue)}} 
        precision={1}
        size="small"/>
        <label>Normal Rating - Medium</label>
        <MyRating 
        onValueChange={(newValue)=>{console.log(newValue)}} 
        precision={1}
        size="medium"/>
        <label>Normal Rating - Large</label>
        <MyRating 
        onValueChange={(newValue)=>{console.log(newValue)}} 
        precision={1}
        size="large"/>
        <label>Disabled</label>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} value={2} precision={0.5} disabled/>
        <label>Disabled with Fraction</label>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} value={3.2} precision={0.5} disabled/>
        <label>Read-only with value passed by devs</label>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} value={3} precision={0.5} readOnly/>
        <label>Highlight Selected Only</label>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} precision={1} highlightSelectedOnly/>
        <label>Fraction Selection</label>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} precision={0.5}/>
        <label>Out of range value</label>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} max={3} value={5} precision={0.5}/>
      </div>
    </div>
  );
}

export default App;
