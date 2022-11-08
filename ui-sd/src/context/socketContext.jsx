import React,{ createContext, useState } from "react";

import io from 'socket.io-client';

export const SocketContext = createContext();

const socketFixed = io('localhost:4000');

export const SocketProvider = ({ children }) => {

    const [socket, setSocket] = useState(socketFixed);
    return (
        <SocketContext.Provider value = {socket}>
            { children }
        </SocketContext.Provider>
    );
}