import * as React from "react";
import { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import { TextField,Typography,Button, Link } from "@mui/material";
import { SocketContext } from "../context/socketContext";

export default function RegisterTopic() {

    const  socket  =   useContext(SocketContext);

    const [topic, setTopic] = useState('');
    
    const handleClick = (event) => {
        console.log(topic);
        let jsonREGTOPIC = {
            "topic": topic
          }
        socket.emit('REG-TOPIC',jsonREGTOPIC);
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
        <Typography> Registre aqui su nuevo Topico </Typography>
        <TextField 
        id="tfTopic" 
        label="Topico"
        variant="outlined"
        value={topic}
        onChange={(event) => {setTopic(event.target.value);}}
        />
        <Button 
        variant="contained"
        onClick={handleClick}
        >Ingresar</Button>
    </Box>
  );
}
