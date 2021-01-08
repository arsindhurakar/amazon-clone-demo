import React, { createContext, useContext, useReducer } from 'react';

// PREPARES THE DATALAYER
export const StateContext = createContext();

// WRAPS OUR APP AND PROVIDE THE DATA LAYER
function StateProvider({ reducer, initialState, children }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

// PULL INFORMATION FROM THE DATA LAYER
export const useStateValue = () => {
    return useContext(StateContext)
}