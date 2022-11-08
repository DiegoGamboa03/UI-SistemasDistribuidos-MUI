import io from 'socket.io-client'
import React, {useState, useEffect,useContext} from "react";
import { SocketContext } from './context/socketContext';


 //emit enviar


function PublishSubscriber(){

  const  socket  =   useContext(SocketContext);

  let [message, setMessage] = useState("off");

  socket.on("PUBLISH", (jsonPUBLISH) => {
    setMessage(jsonPUBLISH["Message"]);
  });

  return (<div>
    <h1>Mensaje: {message}</h1>
  </div> );
}

export default PublishSubscriber;