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
      <div style={{display:"flex", flexDirection:"column", border:'1px solid black', width:'auto'}}>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} precision={1}/>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} value={2} precision={0.5} disabled/>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} precision={1} highlightSelectedOnly/>
        <MyRating onValueChange={(newValue)=>{console.log(newValue)}} precision={1} size="Small"/>
      </div>
    </div>
  );
}

export default App;
