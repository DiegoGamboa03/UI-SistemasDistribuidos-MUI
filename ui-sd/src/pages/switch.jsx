import * as React from "react";
import { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import { TextField,Typography,Button, Link, Alert } from "@mui/material";
import { ReactComponent as Switchon } from '../assets/switch-on.svg';
import { ReactComponent as Switchoff } from '../assets/switch-off.svg';
import { JwtContext } from "../context/jwtContext";
import { SocketContext } from "../context/socketContext";
import { ClientIDContext } from "../context/clientidContext";

export default function Switch() {

    const  socket  =   useContext(SocketContext);
    const { jwt } = useContext(JwtContext);
    const { clientID } = useContext(ClientIDContext);

    const [topic, setTopic] = useState('');

    let state = 'on';
    let topicAux = '';
    const handleClick = (event) => {    

        let jsonPUBLISH= {
            "Client-ID": clientID,
            "Topic": topic,
            "token": jwt
        };
        socket.emit('PUBLISH',jsonPUBLISH);
    
    };

    socket.on("PUBACK", (jsonPUBACK) => {
        
        if(jsonPUBACK['returnCode'] == 0){
            setTopic(topicAux);
        }else{
            window.alert("sometext");
        }
  
        console.log(jsonPUBACK);
        
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
        <Typography>{topicAux}</Typography>
        {state == 'on' ? <Switchon style={{ height: 200, width:200, margin:'20px' }}/>
        : <Switchoff style={{ height: 200, width:200, margin:'20px' }}/>}
        <TextField 
        id="tfTopic" 
        label="Topico"
        variant="outlined"
        onChange={(event) => {setTopic(event.target.value);}}
        />
        <Button 
        variant="contained"
        onClick={handleClick}
        >Publicar</Button>
    </Box>
  );
}
