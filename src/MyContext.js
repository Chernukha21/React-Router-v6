import React, {createContext, useEffect, useState} from 'react';

const MyContext = createContext();

const MyContextProvider = ({children}) => {
    const [stateData, setStateData] = useState('I from context');

    return (
        <MyContext.Provider value={{ stateData, setStateData }}>
            {children}
        </MyContext.Provider>
    );
}

export {MyContext, MyContextProvider}

