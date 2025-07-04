import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodoContext} from '../TodoContext'
import React from 'react';

function AppUI() {

  const {
    error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo
  } = React.useContext(TodoContext);
  return (
    //React.Fragment Permite tener un contenedor de todos nuestros compoenentes
    //<React.Fragment>
    <>
      <TodoCounter />
      <TodoSearch/>

      
          <TodoList>
            {loading &&
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      <CreateTodoButton />
      {/* </React.Fragment> */}
    </>

  );
}

export { AppUI };