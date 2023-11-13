// here we define all the application level states and define actions to make the changes to the state


export type Item =  {
    id: number;
    price: number;
    rating: number;
    title: string
}
//Selector
export type ReducerState = {
    basket: Item[] 
}

export type ReducerAction = {
    type: string;
    item: Item
}
export type DeletedAcion = {
    type: string;
    item: Item
}

export type ActionType = ReducerAction | DeletedAcion;

export const initialState:ReducerState = {
    basket: [],
}

 export enum CONSTANTS  {
    ADD_TO_BASKET= "ADD_TO_BASKET",
    REMOVE_FROM_BASKET= "REMOVE_FROM_BASKET",
}

export const getTotal = (state: ReducerState) => {
    return state.basket.reduce((acc , next ) => acc + next.price, 0)
}

const reducer = (state: ReducerState, action: ActionType) => {
    switch(action.type) {
        case CONSTANTS.ADD_TO_BASKET:
            return {
                ...state, 
                basket: [...state.basket, action.item],
            }
        case CONSTANTS.REMOVE_FROM_BASKET:
            return {
                ...state, 
                basket: state.basket.filter(el => el.id !== action.item.id),
            }
        default :
            return state
    }
};

export default reducer;