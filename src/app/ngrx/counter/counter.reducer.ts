
import { createReducer, on } from "@ngrx/store" 
import { initialState } from "./counter.state"
import { customIncrement, decrement, increment, nameChange, reset } from "./counter.action"

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter+1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter-1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(nameChange, (state) => {
        return {
            ...state,
            name: 'My name is Kathir'
        }
    }),
)