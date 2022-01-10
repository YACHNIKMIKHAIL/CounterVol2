import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";
import styled from "styled-components";

import {Setter} from "./Setter";
import {Display} from "./Display";
import {NavLink, Route, Routes} from 'react-router-dom';
import {Button} from "@mui/material";

type CounterPropsType = {
    setMaxValue: (max: number) => void
    setMinValue: (min: number) => void
    changeValue: () => void
    resetValue: () => void
    setValue: () => void
}

const Counter = (props: CounterPropsType) => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)

    console.log(state)

    return (
        <MainCase>
            <Routes>
                <Route path={'/'} element={<Setter callbackMax={props.setMaxValue} callbackMin={props.setMinValue}/>}/>
                <Route path={'/count'}
                       element={<Display/>}/>
            </Routes>
            <ButtonCase>
                {/*<button onClick={props.changeValue}*/}
                {/*        style={!state.disabled || state.value === state.max ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>*/}
                {/*    add*/}
                {/*</button>*/}
                {/*<button onClick={props.resetValue}*/}
                {/*        style={!state.disabled || state.value === state.min ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>*/}
                {/*    <NavLink to={'/'}> reset</NavLink>*/}
                {/*</button>*/}
                {/*<button onClick={props.setValue}*/}
                {/*        style={state.disabled ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>*/}
                {/*    <NavLink to={'/count'}> set</NavLink>*/}
                {/*</button>*/}

                <Button variant="contained" onClick={props.changeValue}
                        disabled={!state.disabled || state.value === state.max ? true : false}>ADD</Button>

                <Button variant="contained" onClick={props.resetValue} style={{textDecoration: 'none'}}
                        disabled={!state.disabled || !state.error ? true : false}>
                    <NavLink to={'/'}

                    > RESET </NavLink></Button>

                <Button variant="contained" onClick={props.setValue} style={{textDecoration: 'none'}}
                        disabled={state.disabled ? true : false}>
                    {/*{state.error?<NavLink to={'/count'}>SET</NavLink>:'SET'}</Button>*/}
                    <NavLink to={!state.error?'/count':''}>SET</NavLink></Button>

                {/*<NavLink to={'/count'}>SET</NavLink></Button>*/}
                {/*<NavLink to={'/count'}>SET</NavLink></Button>*/}

            </ButtonCase>
        </MainCase>
    );
};

export default Counter;


const MainCase = styled.div`
  height: 35vh;
  width: 40vh;
  background-color: rgba(0, 255, 255, 0.69);
  border-radius: 20px;
`
const ButtonCase = styled.div`
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`