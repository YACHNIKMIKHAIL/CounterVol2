import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";

type InputPropsType = {
    callback: (n:number) => void
}
const Input = (props:InputPropsType) => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)
    return (
        <input type="number" min={state.min} value={state.max} onChange={(e) => {
            props.callback(e.currentTarget.valueAsNumber)
        }}/>
    );
};

export default Input;