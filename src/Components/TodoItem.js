import './../css/TodoItem.css';
import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
      completed={props.completed}
      onComplete={props.onComplete}
      />
      
      {/* En este párrafo se agrega una clase solo si se recibe la propiedad completed como verdadero,
      en ese caso se agrega la clase para aplicar los estilos definidos solo cuando la actividad está completada */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
      
    </li>
  );
}

export { TodoItem};