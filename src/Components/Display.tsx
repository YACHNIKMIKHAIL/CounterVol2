import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";
import React from "react";
import styled from "styled-components";

export const Display = () => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)

    return (
        <GetterCase style={state.error ? {color: 'red', fontWeight: 'bold'} : {}}>
            <div style={{
                borderRadius: '20px',
                fontSize: '80px',
                padding: '20px 50px',
                backgroundColor: 'white'
            }}>{state.value}</div>
        </GetterCase>
    )
}

const GetterCase = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`