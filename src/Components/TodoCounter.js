/* Las props son objetos de forma interna
La forma de enviar props, puede ser completa o por medio de destructuración
ejemplos:
  function TodoCounter(props)
De esta forma por dentro del componente puedes llamar a sus propiedades
  function TodoCounter({ total, completed })
De esta forma, solo las llamas dentro del código donde las necesites */
import './../css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}
export { TodoCounter};