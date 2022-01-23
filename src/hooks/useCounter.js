import { useState } from "react";

export const useCounter = (initialState) => {
    const [state, setState] = useState(initialState);

    // Definimos funciones
    const increment = (factor = 1) => {
        setState( state + factor)
    }

    const decrement = (factor = 1) => {
        setState( state - factor)
    }

    // retornamos un objeto, pues estamos extrayendo
    // la lógica del contador
    return {
        state,
        increment,
        decrement
    }
}