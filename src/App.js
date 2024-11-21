import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

const defaultTodos = [
  {text:'Levantarse', completed: true},
  {text:'Desayunar', completed: true},
  {text:'Lavarse los dientes', completed: false},
  {text:'Ir a la escuela', completed: true},
]
function App() {
  const [todos, setTodos] =React.useState(defaultTodos);
  //Este estado debe estar en el componente padre, pues así debe ser la comunicación, de padres a hijos, no al revés.
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan todos de: ' +  searchValue)

  return (
    //React.Fragment Permite tener un contenedor de todos nuestros compoenentes
    //<React.Fragment>
    <>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}/>
      <TodoSearch
       searchValue = {searchValue}
       setSearchValue = {setSearchValue}
      />

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
