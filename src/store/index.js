import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import loginReducer from "../reducers/loginReducer"
import utilReducer from "../reducers/utilReducer"
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const initialState = {
   loginDetails:{
    currentUser: "",
    currentPassword: "",
    
   },
   utils:{
       loggedIn: false 
    }

}



const combinedReducers = combineReducers({
    loginDetails: loginReducer,
    utils: utilReducer
})

 const configureStore=()=>{
    return createStore(
        combinedReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))

)}

export default configureStore


