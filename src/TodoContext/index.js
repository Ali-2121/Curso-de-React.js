import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1_ALI', []);
    //Este estado debe estar en el componente padre, pues así debe ser la comunicación, de padres a hijos, no al revés.
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const totalTodos = todos.length;



    React.useEffect(() => {
        console.log('2')
    }, [totalTodos])


    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    )

    const completeTodo = (text) => {
        //Copia del array de todos con todos sus elementos previos
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    const deleteTodo = (text) => {
        //Copia del array de todos con todos sus elementos previos
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            completeTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodos,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };