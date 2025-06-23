/* Las props son objetos de forma interna
La forma de enviar props, puede ser completa o por medio de destructuración
ejemplos:
  function TodoCounter(props)
De esta forma por dentro del componente puedes llamar a sus propiedades
  function TodoCounter({ total, completed })
De esta forma, solo las llamas dentro del código donde las necesites */
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const  {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
        {`Has completado ${completedTodos} de ${totalTodos} TODOs`}
    </h1>
  );
}
export { TodoCounter};