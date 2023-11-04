import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';


const Todos = () => {
    const { stateData, setStateData } = useContext(MyContext);
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <div>
            <h2>Component A</h2>
            <p>Data from Context: {stateData}</p>
            <button onClick={() => setStateData('Updated data from Context!')}>
                Update Context Data
            </button>
            <div>
                <h1>Counter: {counterValue}</h1>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
            </div>
        </div>
    );
};

export default Todos;