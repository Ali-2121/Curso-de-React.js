import './../css/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
        V
      </span>
      {/* En este párrafo se agrega una clase solo si se recibe la propiedad completed como verdadero,
      en ese caso se agrega la clase para aplicar los estilos definidos solo cuando la actividad está completada */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem};