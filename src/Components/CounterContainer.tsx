import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {
    changeValueAC,
    resetValueAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC,
    StateType
} from "../State/CounterReducer";
import Counter from "./Counter";

const CounterContainer = () => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)
    const dispatch = useDispatch()

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
    }
    const setValue = () => {
        dispatch(setValueAC(state.min))
    }

    return (
        <div>
            <Counter setMaxValue={setMaxValue} setMinValue={setMinValue} changeValue={changeValue}
                     resetValue={resetValue} setValue={setValue}/>
        </div>
    );
};

export default CounterContainer;