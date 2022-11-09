import React,{ createContext, useState } from "react";

export const ClientIDContext = createContext();

const ClientProvider = ({ children }) => {

    const [clientID, setClientID] = useState('');

    return (
        <ClientIDContext.Provider value = {{clientID,setClientID}}>
            { children }
        </ClientIDContext.Provider>
    );
}
export default ClientProvider;
