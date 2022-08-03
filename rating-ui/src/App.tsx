import React from 'react';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div className="App">
       <Rating size="small" /> 
       <Rating size="medium" /> 
       <Rating size="large" /> 
    </div>
  );
}

export default App;
