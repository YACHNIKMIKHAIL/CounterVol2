import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";
import Input from "./Input";

type CounterPropsType = {
    setMaxValue:(max:number)=>void
    setMinValue:(min:number)=>void
    changeValue:()=>void
    resetValue:()=>void
    setValue:()=>void
}

const Counter = (props: CounterPropsType) => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)
    return (
        <div>
            max:
            <Input callback={props.setMaxValue}/>
            {/*<input type="number" min={state.min} value={state.max} onChange={(e) => {*/}
            {/*    props.setMaxValue(e.currentTarget.valueAsNumber)*/}
            {/*}}/>*/}

            min:
            <Input callback={props.setMinValue}/>
            {/*<input type="number" min={0} value={state.min} onChange={(e) => {*/}
            {/*    props.setMinValue(e.currentTarget.valueAsNumber)*/}
            {/*}}/>*/}

            <div>{state.value}</div>

            <button onClick={props.changeValue}
                    style={!state.disabled || state.value === state.max ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>add
            </button>
            <button onClick={props.resetValue}
                    style={!state.disabled || state.value === state.min ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>reset
            </button>
            <button onClick={props.setValue}
                    style={state.disabled ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>set
            </button>
        </div>
    );
};

export default Counter;