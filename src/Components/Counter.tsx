import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";
import styled from "styled-components";

import {Setter} from "./Setter";
import {Shower} from "./Shower";
import {NavLink, Route, Routes} from 'react-router-dom';

type CounterPropsType = {
    setMaxValue: (max: number) => void
    setMinValue: (min: number) => void
    changeValue: () => void
    resetValue: () => void
    setValue: () => void
}

const Counter = (props: CounterPropsType) => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)
    return (
        <MainCase>
            <Routes>
                <Route path={'/'} element={<Setter callbackMax={props.setMaxValue} callbackMin={props.setMinValue}/>}/>
                {/*<Setter callbackMax={props.setMaxValue} callbackMin={props.setMinValue}/>*/}
                <Route path={'/count'}
                       element={<Shower/>}/>

            </Routes>
            <ButtonCase>
                <button onClick={props.changeValue}
                        style={!state.disabled || state.value === state.max ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>
                    add
                </button>
                <button onClick={props.resetValue}
                        style={!state.disabled || state.value === state.min ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>
                    <NavLink to={'/'}> reset</NavLink>
                </button>
                <button onClick={props.setValue}
                        style={state.disabled ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>
                    <NavLink to={'/count'}> set</NavLink>
                </button>
            </ButtonCase>
        </MainCase>
    );
};

export default Counter;


const MainCase = styled.div`
  border: 3px solid black;
  height: 30vh;
  width: 60vh;
`
const ButtonCase = styled.div`
  border: 3px red solid;
`