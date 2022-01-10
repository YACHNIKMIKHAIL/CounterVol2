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
        case ActionsType.setMinValue:
        case ActionsType.setMaxValue:
        case ActionsType.changeValue:
        case ActionsType.resetValue:
        case ActionsType.disabledButton: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ActionsType.setValue: {
            if (!state.error && state.min < state.max) {
                {
                    return {
                        ...state,
                        ...action.payload
                    }
                }
            } else {
                return state
            }
        }
        case ActionsType.setError: {
            if ((state.value === state.max) || (state.max <= state.min)) {
                return {...state, error: action.payload.error}
            } else {
                return {...state, error: false}
            }
        }
        default:
            return state
    }
}

