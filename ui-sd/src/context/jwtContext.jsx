import React,{ createContext, useState } from "react";

export const JwtContext = createContext();

const JwtProvider = ({ children }) => {

    const [jwt, setJwt] = useState('');
    return (
        <JwtContext.Provider value = {{jwt,setJwt}}>
            { children }
        </JwtContext.Provider>
    );
}
export default JwtProvider;