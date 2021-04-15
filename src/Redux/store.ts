
import { createStore, combineReducers } from 'redux'

import { UsersReducer } from './Users.redux'

const Reducers = combineReducers({
    UsersReducer
})

export default createStore(Reducers)
