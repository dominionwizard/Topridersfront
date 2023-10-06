import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../forms/hire';
import { useState } from "react";
import { Form, Button, FormGroup, FormControl} from "react-bootstrap";
import axios from 'axios'

function Job() {
  
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [lisence, setLisence] = useState("");

  
  const handleSubmit = (event) => {
    // refresh page
    event.preventDefault();
    axios.post('https://topriders.onrender.com/auth/jobber',
    
    {firstname, lastname, email, experience, state, phone, lisence}

    ).then((response)=>{
      console.log(response)
      alert(`Your job application has been received, we will contact you!: ${firstname}  ${lastname}?`);
    })

   
  //  alert(`The name you entered was: ${firstName}  ${lastName}?`);
  }
  return (
    <>
    <div className="App">
      <Container style={{padding: "2rem", marginTop: "-4rem",width: "33rem"}}>
        <Row>
      
    
   <span style={{marginLeft: '10rem', color: 'skyblue'}}> <h6>Be a Paid Rider</h6 ></span>
 
<form onSubmit={handleSubmit}style={{backgroundColor: 'gold'}}>
  <Form.Group className="mb-3">
<Form.Label>First Name</Form.Label>
<Form.Control onChange={(e)=>{setFirstName(e.target.value)}} type="text" name="firstname" placeholder="Enter First name" />
  </Form.Group>

  <Form.Group className="mb-3">
<Form.Label>Last Name</Form.Label>
<Form.Control onChange={(e)=>{setLastName(e.target.value)}} type="text" name="lastname" placeholder="Enter Last name" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
<Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="text" name="email" placeholder="Enter Email" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>experience</Form.Label>
<Form.Control onChange={(e)=>{setExperience(e.target.value)}} type="number" name="experience" placeholder="Enter City" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>State</Form.Label>
<Form.Control onChange={(e)=>{setState(e.target.value)}} type="text" name="state" placeholder="Enter State" />
  </Form.Group>

  <Form.Group className="mb-3">
<Form.Label>Phone Number</Form.Label>
<Form.Control onChange={(e)=>{setPhone(e.target.value)}} type="number" name="phone" placeholder="Enter phone Number" />
  </Form.Group>
  
  <Form.Group className="mb-3">
<Form.Label>lisence</Form.Label>
<Form.Control onChange={(e)=>{setLisence(e.target.value)}} type="file" name="lisence" placeholder="Choose a file" />
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
export default Job;
