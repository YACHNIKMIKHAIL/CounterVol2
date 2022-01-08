import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {StateType} from "../State/CounterReducer";

type SetterPropsType = {
    callbackMin: (n: number) => void
    callbackMax: (n: number) => void
}
export const Setter = (props: SetterPropsType) => {
    const state = useSelector<rootReducerType, StateType>(state => state.blabla)
    return (
        <SetterCase>
            max:
            <input type="number" min={state.min} value={state.max} onChange={(e) => {
                props.callbackMax(e.currentTarget.valueAsNumber)
            }}/>

            min:
            <input type="number" min={0} value={state.min} onChange={(e) => {
                props.callbackMin(e.currentTarget.valueAsNumber)
            }}/>
        </SetterCase>
    )
}
const SetterCase = styled.div`
  border: 3px red solid;
`