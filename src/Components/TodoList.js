/* .children 
Es una propiedad que todos los componentes en react tienen si tienen un componente o elemento dentro y todo lo toma como children
 */
function TodoList(props) {
    return(
      <ul>
        {props.children}
      </ul>
        
        
    )
  }

export { TodoList};