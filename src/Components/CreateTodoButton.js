import './../css/CreateTodoButton.css';

function CreateTodoButton(){
  return(
    <button
     className="CreateTodoButton"
     onClick={(event)=>{
      console.log("clikiii")
      console.log(event)
      console.log(event.target)
     }
     }
     >+</button>
  );
}

export { CreateTodoButton};