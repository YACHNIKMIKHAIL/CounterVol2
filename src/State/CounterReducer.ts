import {
    ActionsType,
    changeValueACType, disabledButtonACType, resetValueACType,
    setErrorACType,
    setMaxValueACType,
    setMinValueACType,
    setValueACType
} from "./Actions";

export type StateType = {
    value: number
    min: number
    max: number
    disabled: boolean
    error: boolean
}
const initialState = {
    value: 0,
    min: 0,
    max: 0,
    disabled: false,
    error: true
}
type ActionsACType =
    setMinValueACType
    | setMaxValueACType
    | changeValueACType
    | resetValueACType
    | setValueACType
    | disabledButtonACType
    | setErrorACType
export const CounterReducer = (state = initialState, action: ActionsACType): StateType => {
    switch (action.type) {
        case ActionsType.setMinValue: {
            return {...state, min: action.min}
        }
        case ActionsType.setMaxValue: {
            return {...state, max: action.max}
        }
        case ActionsType.changeValue: {
            return {...state, value: action.value}
        }
        case ActionsType.resetValue: {
            return {...state, value: 0, min: 0, max: 0, disabled: action.disabled}
        }
        case ActionsType.setValue: {
            return {...state, value: action.min, disabled: action.disabled}
        }
        case ActionsType.disabledButton: {
            return {...state, disabled: action.disabled}
        }
        case ActionsType.setError: {
            if ((state.value === state.max) || (state.max <= state.min)) {
                return {...state, error: action.error}
            } else {
                return {...state, error: false}
            }
        }
        default:
            return state
    }
}

