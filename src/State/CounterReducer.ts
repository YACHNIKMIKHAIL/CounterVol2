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
type ActionsType =
    setMinValueACType
    | setMaxValueACType
    | changeValueACType
    | resetValueACType
    | setValueACType
    | disabledButtonACType
    | setErrorACType
export const CounterReducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case setMinValue: {
            return {...state, min: action.min}
        }
        case setMaxValue: {
            return {...state, max: action.max}
        }
        case changeValue: {
            return {...state, value: action.value}
        }
        case resetValue: {
            return {...state, value: 0, min: 0, max: 0, disabled: action.disabled}
        }
        case setValue: {
            return {...state, value: action.min, disabled: action.disabled}
        }
        case disabledButton: {
            return {...state, disabled: action.disabled}
        }
        case setError: {
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
const setMinValue = 'SET_MIN_VALUE'
type setMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (min: number) => {
    return {
        type: setMinValue,
        min
    } as const
}
const setMaxValue = 'SET_MAX_VALUE'
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (max: number) => {
    return {
        type: setMaxValue, max
    } as const
}
const changeValue = 'CHANGE_VALUE'
type changeValueACType = ReturnType<typeof changeValueAC>
export const changeValueAC = (value: number) => {
    return {
        type: changeValue,
        value
    } as const
}
const resetValue = 'RESET_VALUE'
type resetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => {
    return {
        type: resetValue, disabled: false
    } as const
}
const setValue = 'SET_VALUE'
type setValueACType = ReturnType<typeof setValueAC>
export const setValueAC = (min: number) => {
    return {
        type: setValue,
        min, disabled: true
    } as const
}
const disabledButton = 'DISABLED'
type disabledButtonACType = ReturnType<typeof disabledButtonAC>
export const disabledButtonAC = (disabled: boolean) => {
    return {
        type: disabledButton,
        disabled
    } as const
}
const setError = 'ERROR'
type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = () => {
    return {
        type: setError,
        error: true
    } as const
}