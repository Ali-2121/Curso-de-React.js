import './../css/TodoItem.css';
import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed}/>
      {/* <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
        V
      </span> */}
      {/* En este párrafo se agrega una clase solo si se recibe la propiedad completed como verdadero,
      en ese caso se agrega la clase para aplicar los estilos definidos solo cuando la actividad está completada */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon/>
      {/* <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span> */}
    </li>
  );
}

export { TodoItem};