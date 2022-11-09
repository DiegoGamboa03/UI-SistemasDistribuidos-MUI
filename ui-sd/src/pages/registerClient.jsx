import * as React from "react";
import Box from "@mui/material/Box";
import { useState,useContext } from "react";
import { TextField,Typography,Button, MenuItem, InputLabel, FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import { SocketContext } from "../context/socketContext";


export default function RegisterTopic() {
    
    const  socket  =   useContext(SocketContext);

    const [type, setType] = useState('');
    const [ClientID, setClientID] = useState('');

    const handleChangeSelect = (event) => {
        setType(event.target.value);
    };

    const handleClick = (event) => {
        let jsonREGCLIENT = {
            "clientID": ClientID,
            "type": type
          }
        socket.emit('REG-CLIENT',jsonREGCLIENT);
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
        <Typography> Registre aqui Cliente </Typography>
        <TextField 
        id="tfClient" 
        label="Client"
        variant="outlined"
        value={ClientID}
        onChange={(event) => {setClientID(event.target.value);
        }} 
        />
        <FormControl>
        <InputLabel>Tipo de dispositivo</InputLabel>
        <Select
            value={type}
            label="Tipo de dispositivo"
            onChange={handleChangeSelect}
        >
            <MenuItem value={'bulb'}>Bombillo</MenuItem>
            <MenuItem value={'switch'}>Enchufe</MenuItem>
        </Select>
        </FormControl>
        <Button 
        variant="contained"
        onClick={handleClick}>Registrar</Button>
    </Box>
  );
}
