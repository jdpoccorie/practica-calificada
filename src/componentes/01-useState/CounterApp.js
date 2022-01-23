import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 30,
        counter3: 10,
        counter4: 30
    });

    // console.log(counter)
    const { counter1, counter2 } = state;

    return (
        <>
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <hr/>
            <button 
                className='btn btn-primary'
                onClick={() => {
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    })
                }}>
                +1
            </button>
        </>
    );
};
