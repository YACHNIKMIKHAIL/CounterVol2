import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";
import styled from "styled-components";

import {Setter} from "./Setter";
import {Display} from "./Display";
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom';
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
    const navigate = useNavigate()
    const setV = () => {
        if (!state.error && state.min < state.max) {
            navigate('/count')
            props.setValue()
        } else {
            return
        }
    }


    return (
        <MainCase>
            <Routes>
                <Route path={'/CounterVol2'}
                       element={<Setter callbackMax={props.setMaxValue} callbackMin={props.setMinValue}/>}/>
                <Route path={'/count'}
                       element={<Display/>}/>
            </Routes>
            <ButtonCase>
                <Button variant="contained" onClick={props.changeValue}
                        disabled={!state.disabled || state.value === state.max}>ADD</Button>

                <Button variant="contained" onClick={props.resetValue} style={{textDecoration: 'none'}}
                        disabled={!state.disabled || state.value === state.min}>
                    <NavLink to={'/CounterVol2'} style={{textDecoration: 'none'}}> RESET </NavLink></Button>

                <Button variant="contained" onClick={setV} style={{textDecoration: 'none'}}
                        disabled={state.disabled}>
                    <div
                        // to={!state.error && state.min < state.max ? '/count' : '/'}
                        style={{textDecoration: 'none'}}>SET
                    </div>
                </Button>
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