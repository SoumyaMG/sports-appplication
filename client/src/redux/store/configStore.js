import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import playersReducer from '../reducers/playersReducer'
import compareReducer from '../reducers/compareReducer'

const configureStore=function(){
    const store=createStore(combineReducers({
        players:playersReducer,
        compare:compareReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore