import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante }) => {

    /* Definir el state */
    const [ cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);

    /* Funcion que lee el presupuesto */
    const definirPresupuesto = e => {
        /* e.target.value devuelve un string, por eso lo convertimos a numero */
        guardarCantidad( parseInt(e.target.value, 10) );

    }

    /* Submit para definir el presupuesto */
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        /* Validar */
        if( cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return; // Importante esta linea para que no se siga ejecutando el codigo
        }

        /* Si se pasa la validacion */
        guardarError(false);

        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

    }


    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es Incorrecto" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>

        </Fragment>
    );
}

export default Pregunta;