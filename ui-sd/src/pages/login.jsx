import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { TextField,Typography,Button, Link } from "@mui/material";

export default function Login() {
    let navigate = useNavigate();
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
        }}
        >
            <Typography> Titulo </Typography>
            <TextField id="tfBroker" label="URL Broker" variant="outlined" />
            <TextField id="tfClientID" label="Client-ID" variant="outlined" />
            <Button variant="contained">Ingresar</Button>
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

