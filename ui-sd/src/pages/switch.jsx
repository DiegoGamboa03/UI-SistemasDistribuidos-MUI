import * as React from "react";
import { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import { TextField,Typography,Button, Link, Alert } from "@mui/material";
import { ReactComponent as Switchon } from '../assets/switch-on.svg';
import { ReactComponent as Switchoff } from '../assets/switch-off.svg';
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import { SocketContext } from "../context/socketContext";
import { ClientIDContext } from "../context/clientidContext";

export default function Switch() {

    const  socket  =   useContext(SocketContext);
    const { jwt } = useContext(JwtContext);
    const { clientID } = useContext(ClientIDContext);

    const [topic, setTopic] = useState('');
    const [state, setState] = useState('off');

    let topicAux = '';
    let navigate = useNavigate();

    const handleClickPUBLISH = (event) => {    
        if(state == 'on'){
            setState('off');
        }else{
            setState('on');
        }
        console.log('el valor del state: ' + state);
        console.log(topic);
        let jsonPUBLISH= {
            "Client-ID": clientID,
            "Topic": topic,
            "Message": state,
            "token": jwt
        };
        console.log(jsonPUBLISH);
        socket.emit('PUBLISH',jsonPUBLISH);
    
    };

    const handleClickRegisterPublisher = (event) => {    
        navigate("/registerPublisher");
    };

    socket.on("PUBACK", (jsonPUBACK) => {
        
        if(jsonPUBACK['returnCode'] == 0){

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
        {state == 'on' ? <Switchoff style={{ height: 200, width:200, margin:'20px' }}/>
        : <Switchon style={{ height: 200, width:200, margin:'20px' }}/>}
        <TextField 
        id="tfTopic" 
        label="Topico"
        variant="outlined"
        onChange={(event) => {setTopic(event.target.value);}}
        />
        <Button 
        variant="contained"
        onClick={handleClickPUBLISH}
        >Publicar</Button>
        <Button
        variant="contained"
        onClick={handleClickRegisterPublisher}
        >Hacerse Publicador</Button>
    </Box>
  );
}
