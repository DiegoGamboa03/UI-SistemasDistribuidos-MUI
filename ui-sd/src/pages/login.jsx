import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import Box from "@mui/material/Box";
import { TextField,Typography,Button, Link } from "@mui/material";
import { SocketContext } from "../context/socketContext";
import { JwtContext } from "../context/jwtContext";
import { ClientIDContext } from "../context/clientidContext";


export default function Login() {
    
    let navigate = useNavigate();
    

    const  socket  =   useContext(SocketContext);
    const { setJwt } = useContext(JwtContext);
    const { setClientID } = useContext(ClientIDContext);

    const [ClientID, setClientIDpage] = useState('');
    
    const handleClick = (event) => {
        let jsonCONNECT = {
            "Client-ID": ClientID
        };
        socket.emit('CONNECT',jsonCONNECT);
    };

    socket.on("CONNACK", (jsonCONNACK) => {
        
        if(jsonCONNACK['returnCode'] == 0){
            
            setJwt(jsonCONNACK['token']);
            setClientID(ClientID);
            console.log(jsonCONNACK);
            let type = jsonCONNACK['type'];
            if(type == 'bulb'){
                navigate("/bulb");
            }else if(type == 'switch'){
                navigate("/switch");
            }

        }else{

        }
  
        console.log(jsonCONNACK);
        
      });

    return (
    <Box>
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
            <Typography> Titulo </Typography>
            <TextField id="tfBroker" label="URL Broker" variant="outlined" />
            <TextField 
            id="tfClientID"
            label="Client-ID"
            variant="outlined" 
            value={ClientID}
            onChange={(event) => {setClientIDpage(event.target.value);}
            }/>
            <Button 
            variant="contained"
            onClick={handleClick}
            >Ingresar</Button>
        </Box>
        <Box
        sx={{
            p: 2,
            m:10
            }}
        >
            <Button variant="contained"
             onClick={() => {
            navigate("/registerClient");
            }}> Registrar ID de cliente </Button>
            <Button variant="contained"
            onClick={() => {
                navigate("/registerTopic");
            }}> Registrar Topico </Button>
        </Box>
    </Box>
  );
}

