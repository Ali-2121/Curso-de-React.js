import './TodoSearch.css';

function TodoSearch({
   searchValue,
   setSearchValue,
 
}) {
  return (
    <input
      placeholder="Ingresa una actividad"
      className="TodoSearch"
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch};