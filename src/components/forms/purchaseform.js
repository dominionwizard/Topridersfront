// import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../forms/hire';
import { useState } from "react";
import axios from 'axios'
// import 'index.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Formpurchase() {
  
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [nin, setNin] = useState("");
  const [gname, setGname] = useState("");
  const [gaddress, setGaddress] = useState("");
  const [gnin, setGnin] = useState("");




  const handleSubmit = (event) => {
    // refresh page
    event.preventDefault();
    axios.post('https://topriders.onrender.com/auth/hire',
    
    {first, last, email, city, state, phone, nin, gname, gaddress, gnin}
    ).then((response)=>{
      console.log(response)
      alert(`We have received your request, we will get back to you as soon as possible.: ${first}  ${last}?`);
    })

   
  //  alert(`The name you entered was: ${firstName}  ${lastName}?`);
 }


  return (
    <>
    <div className="App">
      <Container style={{padding: "2rem", marginTop: "-4rem",width: "33rem"}}>
        <Row>
      
    
   <span style={{marginLeft: '10rem', color: 'skyblue'}}> <h6>Hire Purchase Form</h6 ></span>
 
<form onSubmit={handleSubmit}style={{backgroundColor: 'skyblue'}}>
  <Form.Group className="mb-3">
<Form.Label>First Name</Form.Label>
<Form.Control onChange={(e)=>{setFirst(e.target.value)}} type="text" name="last" placeholder="Enter Last name" />
  </Form.Group>

  <Form.Group className="mb-3">
<Form.Label>Last Name</Form.Label>
<Form.Control onChange={(e)=>{setLast(e.target.value)}} type="text" name="first" placeholder="Enter First name" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
<Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="text" name="email" placeholder="Enter Email" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>City</Form.Label>
<Form.Control onChange={(e)=>{setCity(e.target.value)}} type="text" name="city" placeholder="Enter City" />
  </Form.Group>
  
  <FormGroup className="mb-3">
<Form.Label>State</Form.Label>
<Form.Control onChange={(e)=>{setState(e.target.value)}} type="text" name="state" placeholder="Enter State" />
  </FormGroup>

  <Form.Group className="mb-3">
<Form.Label>Phone Number</Form.Label>
<Form.Control onChange={(e)=>{setPhone(e.target.value)}} type="number" name="phone" placeholder="Enter phone Number" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>NIN</Form.Label>
<Form.Control onChange={(e)=>{setNin(e.target.value)}} type="number" name="nin" placeholder="Enter NIN" />
  </Form.Group>

  <Form.Group className="mb-3">
<Form.Label>Guarantor's Address</Form.Label>
<Form.Control onChange={(e)=>{setGaddress(e.target.value)}} type="text" name="gaddress" placeholder="Enter First name" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>Guarantor's NIN</Form.Label>
<Form.Control onChange={(e)=>{setGnin(e.target.value)}} type="text" name="gnin" placeholder="Enter Guarantor's Address" />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={{handleSubmit}}>
    Submit
  </Button>
  
  </form>
  </Row>
  </Container>
  </div>
  </>
)
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Formpurchase/>);
export default Formpurchase