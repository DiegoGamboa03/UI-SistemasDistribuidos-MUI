import * as React from "react";
import { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import { TextField,Typography,Button, Link, Alert } from "@mui/material";
import { ReactComponent as Lighton } from '../assets/lightbulb-on.svg';
import { ReactComponent as Lightoff } from '../assets/lightbulb-off.svg';
import { JwtContext } from "../context/jwtContext";
import { SocketContext } from "../context/socketContext";
import { ClientIDContext } from "../context/clientidContext";

export default function Bulb() {
    
    const  socket  =   useContext(SocketContext);
    const { jwt } = useContext(JwtContext);
    const { clientID } = useContext(ClientIDContext);

    
    const [message, setMessage] = useState('off');
    const [topic, setTopic] = useState('');

    let topicAux;

    const handleClick = (event) => {
        
        let jsonSUBSCRIBE = {
            "Client-ID": clientID,
            "Topic": topic,
            "token": jwt
        };
        console.log(jwt);
        topicAux = topic;
        socket.emit('SUBSCRIBE',jsonSUBSCRIBE);
    
    };

    socket.on("SUBACK", (jsonSUBACK) => {
        
        if(jsonSUBACK['returnCode'] == 0){
            setTopic(topicAux);
        }else{
            console.log("hol;aaaaa");
            window.alert("sometext");
        }
  
        console.log(jsonSUBACK);
        
    });

    socket.on("PUBLISH", (jsonPUBLISH) => {
        
        setMessage(jsonPUBLISH['Message']);
        
    });
    
    return (
    <Box
    sx={{
        p: 10,
        m:15,
        border: "10px dashed grey",
        display: "grid",
        flexDirection: 'column',
        justifyContent: "center",
        textAlign: 'center',
        alignItems: 'center'
    }}>
        <Typography>{topic}</Typography>
        {message == 'on' ? <Lighton style={{ height: 200, width:200, margin:'20px' }}/>
        : <Lightoff style={{ height: 200, width:200, margin:'20px' }}/>}
        <TextField 
        id="tfTopic" 
        label="Topico"
        variant="outlined"
        onChange={(event) => {setTopic(event.target.value);}}
        />
        <Button 
        variant="contained"
        onClick={handleClick}
        >Subcribirse</Button>
    </Box>
  );
}
