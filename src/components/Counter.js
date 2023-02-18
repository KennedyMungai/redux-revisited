import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () =>
{
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  let amount = 6

  const toggleCounterHandler = () =>
  {
    dispatch({
      type: 'toggle'
    })
  };

  const incrementHandler = () => 
  {
    dispatch({
      type: 'increment'
    })
  }

  const decrementHandler = () => 
  {
    dispatch({
      type: 'decrement'
    })
  }

  const increaseHandler = () =>
  {
    dispatch({
      type: 'increase',
      amount
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
