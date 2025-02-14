/* .children 
Es una propiedad que todos los componentes en react tienen si tienen un componente o elemento dentro y todo lo toma como children
 */
import './TodoList.css'

function TodoList({children}){
  return(<ul className="TodoList">{children}</ul>);
}

export { TodoList};