import { CounterReducer,  StateType} from "./CounterReducer";
import {changeValueAC, resetValueAC, setMinValueAC} from "./Actions";

test('correct set value', () => {

    const startState:StateType = {
        value: 0,
        min: 3,
        max: 7,
        disabled:false,
        error:false
    }

    const endState:StateType = CounterReducer(startState, setMinValueAC(5))

    expect(startState.min).toBe(3)
    expect(startState.value).toBe(0)
    expect(endState.min).toBe(5)
})

test('correct change value', () => {

    const startState:StateType = {
        value: 3,
        min: 3,
        max: 7,
        disabled:false,
        error:false
    }

    const endState:StateType = CounterReducer(startState, changeValueAC(5))
    expect(endState.value).toBe(5)

})
test('correct reset value', () => {

    const startState:StateType = {
        value: 3,
        min: 3,
        max: 7,
        disabled:false,
        error:false
    }

    const endState:StateType = CounterReducer(startState, resetValueAC())
    expect(endState.value).toBe(0)
    expect(endState.min).toBe(0)
    expect(endState.max).toBe(0)

})