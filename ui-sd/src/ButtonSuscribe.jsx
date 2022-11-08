import io from 'socket.io-client'
import React, {useRef, useState, useContext} from "react";
import { SocketContext } from './context/socketContext';
import { JwtContext } from './context/jwtContext';


 //emit enviar
 //on escuchar


function Suscribe(){
  const  socket  =   useContext(SocketContext);
  const {jwt} = useContext(JwtContext)


  socket.on("SUBACK", (jsonSUBACK) => {
  
    console.log(jsonSUBACK);
    
  });


  const textInput = useRef(null);
  const textInputIDClient = useRef(null);

  const handleClick = (e) =>{
    e.preventDefault;
    let mensaje = textInput.current.value;
    let jsonSUBSCRIBE = {
      "Client-ID": textInputIDClient.current.value,
      "Topic": mensaje,
      "token": jwt
    }
  
    console.log(mensaje);
  
    socket.emit('SUBSCRIBE',jsonSUBSCRIBE);
  } 

const [mensaje, setMensaje] = useState();

  return <div>
    <input ref = {textInputIDClient}></input>
    <input ref = {textInput}></input>
    <button onClick = {handleClick}> Suscribirse </button>
  </div> 
}

export default Suscribe;