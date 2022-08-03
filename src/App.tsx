import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyButton from './components/MyButton/MyButton';
import Checkbox from './components/Checkbox/Checkbox';

import { MdCheckBoxOutlineBlank, MdCheckBox, MdTurnedInNot, MdTurnedIn, MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md";

function App() {
  return (
    <>
      <div style={{display:"flex", gap:"10px"}}>
        <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained"  disabled>SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="default" variant="outlined" >SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" >SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="text" disabled>SUBMIT</MyButton>
        <MyButton onClick={()=>{console.log("clicked")}} color="primary" variant="contained" >SUBMIT</MyButton>
      </div>
      <br />
      <br />
      <br />
      <div style={{display:"flex", gap:"100px"}}>
        <Checkbox color="primary" disabled />
        <Checkbox color="default" />
        <Checkbox color="secondary" />
        <Checkbox color="primary" disabled icon={<MdOutlineFavoriteBorder />} checkedIcon={<MdOutlineFavorite />} />
        <Checkbox color="secondary"  icon={<MdTurnedInNot />} checkedIcon={<MdTurnedIn />} />
      </div>
    </>
  );
}

export default App;
