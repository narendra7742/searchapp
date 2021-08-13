import React from 'react';
import './App.css';
import { MDBCol, MDBIcon } from "mdbreact";
import axios from 'axios';
import { useState } from 'react';
function App() {
  const max = 50;
  const [image, setImage] = useState("");
  const clientId = "9F9k2gOeFgxuyjKqIrt37VPJrxRGxfyBVc-Mzpt0kxI";
  const [result, setResult] = useState([]);
  const [print, setPrint] = useState(false);

  const handleChange = (event) => {
    setImage(event.target.value);
    setPrint(false)
  };
  
  const handleSubmit = () => {
    console.log(image);
    setPrint(true);
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };

  

  return (
    <div 
    className='app'>
      <div 
      className='heading'>
        <h1>Search Images.</h1>
      </div>
    <MDBCol md="6">
    <div className="input-bar">
     <div className="input-bar-item width100">
      <form 
      className="form-inline mt-4 mb-4">
      <div class="form-group">
        <MDBIcon icon="search" />
        <input id="int" 
        className="form-group form-control form-control-sm ml-3 w-75" onChange={handleChange} type="text" placeholder="Search" aria-label="Search" />
      </div>
      </form>
      </div>
       <div className="input-bar-item form-group">
           <button id="btn" type='submit' onClick={ handleSubmit}>Search</button>
        </div>
        
     
    </div>
    <div id='table-row'>{
          print?<div><h2>RANDOM</h2><h5>40 images has been found</h5></div>:null
        }</div>
    
    </MDBCol>
      
      <div 
      className="result">
        {result.map((image) => (
          <>
            <div 
            className="card">
              <img src={image.urls.thumb} width='200px' height='200px' border-radius='20px' />
            </div>
          </>
        ))}
      </div>
    </div>);
}

export default App;