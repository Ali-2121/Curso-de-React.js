import './../css/TodoSearch.css';

function TodoSearch() {
  return (
    <input
      placeholder="Ingresa una actividad"
      className="TodoSearch"
      onChange={(event)=>{
        console.log("escribiendo")
        console.log(event.target.value)
        console.log(event.target)
      }}
    />
  );
}
export { TodoSearch};