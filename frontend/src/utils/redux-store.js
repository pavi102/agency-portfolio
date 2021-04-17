import { createStore } from 'redux';

export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";


const initialState = {
    jwt: "",
    user: "",
}

function reducer(state = initialState, action){
    switch (action.type){
        case LOGIN:
            const {jwt, user} = action.payload;
            return {...state, jwt, user};
        case LOGOUT:
            return {...state, jwt: "", user: ""};
    }
}

const store = createStore(reducer);

export default store;