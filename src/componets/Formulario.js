import React, { useState } from 'react';
import Error from './Error';

const Formulario = () => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    /* Cuando el usuario agrega un gasto */
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Contruir el gasto

        // Pasar el gasto al componente principal

        // Resetear el form

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad( parseInt(e.target.value, 10) )}
                />
            </div>
            
            {/* Puede ser un input o un button */}
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />


        </form>
    );
}

export default Formulario;