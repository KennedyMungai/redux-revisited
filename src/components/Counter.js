import { useSelector, useDispatch } from 'react-redux';
import store, { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () =>
{
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  let amount = 6

  const toggleCounterHandler = () =>
  {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => 
  {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => 
  {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () =>
  {
    dispatch(counterActions.increase(amount))
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
