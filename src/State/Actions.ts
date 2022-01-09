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
        min
    } as const
}

export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (max: number) => {
    return {
        type: ActionsType.setMaxValue, max
    } as const
}

export type changeValueACType = ReturnType<typeof changeValueAC>
export const changeValueAC = (value: number) => {
    return {
        type: ActionsType.changeValue,
        value
    } as const
}

export type resetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => {
    return {
        type: ActionsType.resetValue, disabled: false
    } as const
}

export type setValueACType = ReturnType<typeof setValueAC>
export const setValueAC = (min: number) => {
    return {
        type: ActionsType.setValue,
        min, disabled: true
    } as const
}

export type disabledButtonACType = ReturnType<typeof disabledButtonAC>
export const disabledButtonAC = (disabled: boolean) => {
    return {
        type: ActionsType.disabledButton,
        disabled
    } as const
}

export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = () => {
    return {
        type: ActionsType.setError,
        error: true
    } as const
}