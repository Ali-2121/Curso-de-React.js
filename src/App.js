import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

function App() {

  const defaultTodos = [
    {text:'Bañarse', completed: false},
    {text:'Comer', completed: true},
    {text:'Hacer ejercicio', completed: true},
    {text:'Dormir', completed: false},
    {text:'Bailar', completed: false}
  ]

  return (
    //React.Fragment Permite tener un contenedor de todos nuestros compoenentes
    //<React.Fragment>
    <>
      <TodoCounter completed={10} total={20}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map( todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    {/* </React.Fragment> */}
    </>
  );
}



export default App;
