import { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    if (true) {
        const [state, setState] = useState(0);
    }

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    // destructuramos
    const {name, email} = formState;

    useEffect(() => {
        // console.log('Hola')
    }, [])

    useEffect(() => {
        // console.log('formState cambió')
    }, [formState])

    useEffect(() => {
        // console.log('email cambió')
    }, [email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Ingresa tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name == '123') && <Message /> }
        </>
    )
}