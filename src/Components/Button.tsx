import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";

type ButtonPropsType={
    callback:()=>void
    name:string
}
const Button = (props:ButtonPropsType) => {
    const state=useSelector<rootReducerType,StateType>(state=>state.blabla)
    return (
        <button onClick={props.callback}
                style={!state.disabled || state.value === state.max ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>
            {props.name}
        </button>
    );
};

export default Button;