import { useState } from "react";

export const useContador = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    // Definimos funciones
    const increment = () => {
        setCounter( counter + 1)
    }

    const decrement = () => {
        setCounter( counter - 1)
    }

    // retornamos un objeto, pues estamos extrayendo
    // la lógica del contador
    return {
        counter,
        increment,
        decrement
    }
}