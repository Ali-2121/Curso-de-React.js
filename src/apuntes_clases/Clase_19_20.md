# 📌  Uso de Custom Hooks

Cuando los **Custom Hooks** retornan más de dos elementos, es recomendable retornar un **objeto** en lugar de un **array**. Esto se hace para evitar problemas relacionados con la posición de los elementos al llamarlos desde un componente, ya que con un objeto puedes acceder a los valores por su nombre en lugar de depender de su orden.

Es importante no olvidar que al usar useEffect, debemos agregar **,[]** como segundo parámetro al final para asegurarnos de que el efecto solo se ejecute una vez, es decir, cuando el componente se monta por primera vez