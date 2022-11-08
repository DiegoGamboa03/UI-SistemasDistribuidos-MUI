import io from 'socket.io-client'
import React, {useRef, useState,useContext} from "react";
import { SocketContext } from './context/socketContext';
import { JwtContext } from './context/jwtContext';

 //emit enviar
 //on escuchar
 
function Publish(){

  const  socket  =   useContext(SocketContext);
  const {jwt} = useContext(JwtContext)

  socket.on("PUBACK", (jsonPUBACK) => {
  
    console.log(jsonPUBACK);
    
  });
  
const textInput = useRef(null);
const textInputIDClient = useRef(null);

const handleClick = (e) =>{
    e.preventDefault;
    let mensaje = textInput.current.value;
    let idClient = textInputIDClient.current.value;
    let jsonPUBLISH = {
      "Client-ID":idClient,
      "Topic": mensaje,
      "Message": "on",
      "token":jwt
    }
  
    console.log(mensaje);
  
    socket.emit('PUBLISH',jsonPUBLISH);
  } 

  return <div>
    <input ref = {textInputIDClient}></input>
    <input ref = {textInput}></input>
    <button onClick = {handleClick}> Publicar </button>
  </div> 
}

export default Publish;