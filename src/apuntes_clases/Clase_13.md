## Local Storage 
Ayuda a la persistencia de datos, para que la información no se borre a pesar de que el usuario salga del navegador. 
Suele tener errores, en ocasiones lo más sencillo es solo borrar la información y volver a iniciar. 
Los TODO's iniciales ya no serán definido en un array en el código, serán extraídos de localStorage y también se actualizarán ahí. 

localStorage no puede guardar estructuras complejas solo puede guardar Strings. Para eso usaremos JSON.stringyfy que ayuda a convertir en string el javascript.
JSON.parse ayuda a devolver el string a algo que se pueda usar en Javascript.
Así que, para guardar algo en localStorage, se debe usar el JSON.stringyfy y para leer algo del localStorage, se debe usar el JSON.parse para que vuelva a ser algo que se pueda usar en JavaScript.