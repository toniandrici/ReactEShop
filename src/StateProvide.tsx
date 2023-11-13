import React,  { createContext, useContext, useReducer, Dispatch } from "react";
import  {ReducerState, ActionType, Item} from "./reducer";
//prepares the data layer

//wrap our app and provide the data layer
type StateProviderProps = {
    reducer: (state: ReducerState, action: ActionType) => {  basket: Item[] };
    initialState: ReducerState;
    children: React.ReactNode;
};

type StateValue = {
    state: ReducerState;
    dispatch: Dispatch<any>;
};


export const StateContext = createContext<StateValue > ({} as StateValue);

export const StateProvider = ({reducer, initialState, children } : StateProviderProps) => {
    const [state, dispatch ] = useReducer(reducer, initialState)
   return (
    <StateContext.Provider value={{state , dispatch}}>
        {children}
    </StateContext.Provider>
   )
};

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);



