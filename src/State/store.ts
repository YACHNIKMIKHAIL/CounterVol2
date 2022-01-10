import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    blabla: CounterReducer
})
export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        blabla: store.getState().blabla
    })
})