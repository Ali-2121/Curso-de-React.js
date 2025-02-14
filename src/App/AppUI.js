import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completeTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodos,
    deleteTodo
}){
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

export{ AppUI };