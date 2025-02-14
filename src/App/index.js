import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

//  const defaultTodos = [
//    {text:'Levantarse', completed: true},
//    {text:'Desayunar', completed: true},
//    {text:'Lavarse los dientes', completed: false},
//    {text:'Ir a la escuela', completed: false},
//  ]

// localStorage.setItem('TODOS_V1_ALI', JSON.stringify(defaultTodos)
// localStorage.removeItem('TODOS_V1_ALI')

function App() {

  const [todos, saveTodos] =useLocalStorage('TODOS_V1_ALI',[]);
  //Este estado debe estar en el componente padre, pues así debe ser la comunicación, de padres a hijos, no al revés.
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => { 
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )
  
  const completeTodo = (text) =>{
    //Copia del array de todos con todos sus elementos previos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) =>{
    //Copia del array de todos con todos sus elementos previos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

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
        {searchedTodos.map( todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = { () => completeTodo(todo.text)}
            onDelete = { () => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    {/* </React.Fragment> */}
    </>
  );
}



export default App;
