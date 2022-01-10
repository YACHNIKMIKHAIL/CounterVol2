import {useSelector} from "react-redux";
import {rootReducerType} from "./store";
import {StateType} from "./CounterReducer";

export enum ActionsType {
    setMinValue = 'SET_MIN_VALUE',
    setMaxValue = 'SET_MAX_VALUE',
    changeValue = 'CHANGE_VALUE',
    resetValue = 'RESET_VALUE',
    setValue = 'SET_VALUE',
    disabledButton = 'DISABLED',
    setError = 'ERROR'
}

export type setMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (min: number) => {
    return {
        type: ActionsType.setMinValue,
        payload: {min}
    } as const
}

export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (max: number) => {
    return {
        type: ActionsType.setMaxValue,
        payload: {max}
    } as const
}

export type changeValueACType = ReturnType<typeof changeValueAC>
export const changeValueAC = (value: number) => {
    return {
        type: ActionsType.changeValue,
        payload: {value}
    } as const
}

export type resetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => {
    return {
        type: ActionsType.resetValue,
        payload: {disabled: false, value: 0, min: 0, max: 0}
    } as const
}

export type setValueACType = ReturnType<typeof setValueAC>
export const setValueAC = (min: number) => {
    return {
        type: ActionsType.setValue,
        payload: {value: min, disabled: true}
    } as const
}

export type disabledButtonACType = ReturnType<typeof disabledButtonAC>
export const disabledButtonAC = (disabled: boolean) => {
    return {
        type: ActionsType.disabledButton,
        payload: {disabled}
    } as const
}

export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = () => {
    return {
        type: ActionsType.setError,
        payload: {error: true}
    } as const
}