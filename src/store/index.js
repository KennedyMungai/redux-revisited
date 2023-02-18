import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => 
{
    if (action.type === 'increment')
    {
        return {
            counter: state.counter + 1, showCounter: true
        }
    }

    if (action.type === 'decrement')
    {
        return {
            counter: state.counter - 1, showCounter: true
        }
    }

    if (action.type === 'increase')
    {
        return {
            counter: state.counter + action.amount, showCounter: true
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store;