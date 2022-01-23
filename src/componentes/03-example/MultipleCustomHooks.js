import React from 'react';
import { useContador } from '../../hooks/useContador';
import { useFetch } from '../../hooks/useFetch';
import './index.css';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useContador(1)
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`)

    const {
        name, 
        img, 
        nickname,
        status,
        birthday,
        occupation,
        portrayed:actor_name
    } = !!data && data[0]

    return (
        <div className='container'>
            <h1 className='text-info'>Breaking Bad Characters!</h1>
            <hr className='text-info bg-info'/>
            {
            loading ?
            (
                <div className='alert alert -info text-center'>
                    Loading...
                </div>
            ):
            (
                <div className='row justify-content-center'>
                    <div className='card m-2'>
                        <img src={img}/>
                        <div className='descriptions'>
                            <h2>{name}</h2>
                            <ul>
                                <li><strong>aka:</strong> {nickname}</li>
                                <li><strong>Status:</strong> {status}</li>
                                <li><strong>Birthday:</strong> {birthday}</li>
                                <li>
                                    <strong>Ocuppations:</strong> 
                                    <ul>{occupation.map((ocupacion) => <li>- {ocupacion}</li>)}</ul>
                                </li>
                                <li><strong>Actor name:</strong> {actor_name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
            }
            <div className='row justify-content-center'>
                <button 
                    className='btn btn-info'
                    onClick={ increment }>
                    Siguiente
                </button>
            </div>
        </div>
    );
};
