import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";
import React from "react";
import styled from "styled-components";

type ShowerPropsType = {}
export const Shower = (props: ShowerPropsType) => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)
    return (
        <GetterCase>
            <div>{state.value}</div>
        </GetterCase>
    )
}

const GetterCase = styled.div`
  border: 3px red solid;
`