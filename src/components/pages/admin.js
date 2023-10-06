import React from 'react'
import styled from "styled-components"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import{useEffect, useState} from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import axios from "axios"
// import{ faTrash } from "@fortawesome/free-solid-svg-icons";
// import{ FontAwesomeIcon } from "@fortawesome/free/react-fontawesome"
// import ModalComponent from "../../Modal/Modal";


const HeroComponent = styled.header `
padding: 2rem 0;
height: 100vh;
// background-repeat: no-repeat;
// background-size: cover;
background-position: center;
width: 20vh
background-color :rgb(5, 148, 112)
`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
padding: 3rem;
color: gold;
width: 31.4rem

`;
const Header = styled.h1`
font-size: 4rem
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400

`
const Admin = (userData) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://topriders.onrender.com/auth/getAllUser",{
   method: "GET",
         })
         .then((res) => res.json())
         .then((data) =>{
            console.log(data, "userData")
            setData(data.data);
         })
         
    },{})
    
    const DeleteUser = (id,email)=>{
        // alert("Delete?"), instead
if( window.confirm(`Are you sure you want to delete ${email}`)){

fetch("https://topriders.onrender.com/auth/deleteUser",{
    method: "DELETE",
    crossDomain: true,
    headers: {
        "Content-Type" : "Application/json",
        Accept: "Application/json",
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
        userid:id
    }),
})
.then((res) => res.json())
.then((data) =>{
   alert(data.data);
}) 

}else{
    
}
}
    return(
        <>
        <HeroComponent>
            {/* <Container>                    */}
                {/* <HeaderContainer> */}
                    <h6>
                    WELCOME ADMIN 
                    </h6>
                         
                {/* </HeaderContainer> */}
                
               <div style={{width: "auto"}}>
                <table style={{width: 500, color: 'white', backgroundColor: 'green'}}>
        <tr>
            <th>User Id</th>
            <th>UserName</th>
            <th>Remove user</th>
            
            </tr>
            {data.map(i=>{
                return(
                    <tr>
                        <td>{i._id}</td>
                        <td>{i.email}</td>
                        <td><DeleteSharpIcon onClick={() =>DeleteUser(i._id, i.email)} /></td>
                    </tr>
                )
            })}
    </table>
    <Link to="/"><button style={{backgroundColor: "red", color: "white", marginLeft: "6rem", fontSize: "1rem"}}>Log out</button></Link>
    </div>
    
            {/* </Container> */}
            
        </HeroComponent>
       
        </> 
    
    ) 
};

export default Admin;
