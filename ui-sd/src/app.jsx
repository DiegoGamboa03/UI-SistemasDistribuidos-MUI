import { useContext, useRef } from 'react';

import { SocketContext } from './context/socketContext';

import {JwtContext} from './context/jwtContext';

function ButtonConnect() {
  const  socket  =   useContext(SocketContext)
  const {setJwt} = useContext(JwtContext)
  const textInputIDClient = useRef(null);
  

 //emit enviar
 //on escuchar

const handleClick = (e) =>{
  e.preventDefault;

  let idClient = textInputIDClient.current.value;

  console.log(idClient);
  console.log(socket);

  let JsonCONNECT = {
    "Client-ID":idClient
  }
  socket.emit('CONNECT',JsonCONNECT);
} 

socket.on("CONNACK", (JsonCONNACK) => {
  
  console.log(JsonCONNACK);
  setJwt(JsonCONNACK['token']);
  
});

  return (
    <div>
      <input ref = {textInputIDClient}></input>
      <button onClick = {handleClick}>
        Conectarse 
      </button>
    </div>
  );
}

export default ButtonConnect;