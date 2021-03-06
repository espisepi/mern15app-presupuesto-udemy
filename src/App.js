import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  /* Definir el state */
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);

  // Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos, // Por si se tiene mas gastos aparte del que estemos añadiendo, que no se pierdan
      gasto
    ]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">

          { mostrarPregunta ? 
          (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  agregarNuevoGasto={agregarNuevoGasto}
                />
              </div>

              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )
          }

          

         

        </div>
      </header>
    </div>
  );
}

export default App;
