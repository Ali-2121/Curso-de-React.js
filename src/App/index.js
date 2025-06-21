import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

//localStorage.removeItem('TODOS_V1_ALI')
//   const defaultTodos = [
//     {text:'Levantarse', completed: true},
//     {text:'Desayunar', completed: true},
//     {text:'Lavarse los dientes', completed: false},
//     {text:'Ir a la escuela', completed: false},
//   ]

//  localStorage.setItem('TODOS_V1_ALI', JSON.stringify(defaultTodos)

function App() {

  const {
    item:todos, 
    saveItem:saveTodos,
    loading,
    error
  } =useLocalStorage('TODOS_V1_ALI',[]);
  //Este estado debe estar en el componente padre, pues así debe ser la comunicación, de padres a hijos, no al revés.
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;



  React.useEffect(()=>{
    console.log('2')
  },[totalTodos])


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

  return(
    <AppUI
      loading={loading}
      error={error}
      completeTodo={completeTodo}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completedTodos={completedTodos}
      deleteTodo={deleteTodo}
  />
  )

}

export default App;
