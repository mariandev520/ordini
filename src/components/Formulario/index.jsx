import React from 'react';
import {
  form,
  tituloInput,
  descripcionInput,
  inputsContainer,
  agregar,
  formContainer,
} from './styles.module.scss';

const Formulario = ({onSubmit, onChange, tarea}) => {
  const {titulo, descripcion} = tarea;

  return (
    
    <div className={formContainer}>
      <h2>pedidos</h2>
      <form className={form} onSubmit={e => onSubmit (e)}>
        <h3>Enciende una Vela</h3>
        <div className={inputsContainer}>
          <input
            autoComplete="off"
            className={tituloInput}
            onChange={e => onChange (e)}
            name="titulo"
            value={titulo}
            placeholder="Título..."
          />
          <textarea
            autoComplete="off"
            className={descripcionInput}
            onChange={e => onChange (e)}
            name="descripcion"
            value={descripcion}
            placeholder="Pedido"
          />
          <button className={agregar}>Encender</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
