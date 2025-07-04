import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      placeholder="Ingresa una actividad"
      className="TodoSearch"
      value ={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch};