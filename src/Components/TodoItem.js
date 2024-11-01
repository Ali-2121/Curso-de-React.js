
function TodoItem(props) {
    return(
      <p>
       {props.text}
       <span>{props.completed? '✔': 'X'}</span>
      </p>
   
    )
  }

export { TodoItem};