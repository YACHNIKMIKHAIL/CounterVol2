import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./State/store";
import {changeValueAC, resetValueAC, setMaxValueAC, setMinValueAC, setValueAC, StateType} from "./State/CounterReducer";

function App() {

    const state = useSelector<rootReducerType, StateType>(state => state.state)
    const dispatch = useDispatch()

    const [disabled, setDisabled] = useState<boolean>(false)

    const setMaxValue = (max: number) => {
        dispatch(setMaxValueAC(max))
    }
    const setMinValue = (min: number) => {
        dispatch(setMinValueAC(min))
    }
    const changeValue = () => {
        if (state.value < state.max) {
            dispatch(changeValueAC(state.value + 1))
        }
    }
    const resetValue = () => {
        dispatch(resetValueAC())
        setDisabled(!disabled)
    }
    const setValue = () => {
        dispatch(setValueAC(state.min))
        setDisabled(!disabled)
    }

    console.log(state)
    return (
        <div className="App">
            max:
            <input type="number" min={state.min} value={state.max} onChange={(e) => {
                setMaxValue(e.currentTarget.valueAsNumber)
            }}/>

            min:
            <input type="number" min={0} value={state.min} onChange={(e) => {
                setMinValue(e.currentTarget.valueAsNumber)
            }}/>

            <div>{state.value}</div>
            <button onClick={changeValue} style={!disabled||state.value===state.max ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>add</button>
            <button onClick={resetValue} style={!disabled||state.value===state.min ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>reset</button>
            <button onClick={setValue} style={disabled ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>set</button>
        </div>
    );
}

export default App;