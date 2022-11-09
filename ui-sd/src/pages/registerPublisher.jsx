import * as React from "react";
import { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import { TextField,Typography,Button } from "@mui/material";
import { SocketContext } from "../context/socketContext";
import { ClientIDContext } from "../context/clientidContext";


export default function RegisterPublisher() {

    const  socket  =   useContext(SocketContext);

    const { clientID } = useContext(ClientIDContext);
    const [topic, setTopic] = useState('');
    
    const handleClick = (event) => {
        console.log(topic);
        console.log(clientID);
        let jsonREGPUBLISHER = {
            "clientID": clientID,
            "topic": topic,
            "type": 'switch'
        }
        socket.emit('REG-PUBLISHER',jsonREGPUBLISHER);
    };

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
        }}
    >
        <Typography> Registre aqui un topico valido al que hacerse publicador </Typography>
        <TextField 
        id="tfTopic" 
        label="Topico"
        variant="outlined"
        onChange={(event) => {setTopic(event.target.value);}}
        />
        <Button 
        variant="contained"
        onClick={handleClick}
        >Ingresar</Button>
    </Box>
  );
}