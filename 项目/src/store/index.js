import {createStore} from 'react-redux'
import thunk from "react-redux"

let stroes=createStore(reducers,app)

export const store = createStore()