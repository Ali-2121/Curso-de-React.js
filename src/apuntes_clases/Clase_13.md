# 📌 Local Storage 

El **Local Storage** permite la persistencia de datos en el navegador, asegurando que la información no se pierda incluso si el usuario cierra la página o reinicia el navegador.  

## 🔹 Características  
- Los datos almacenados en `localStorage` permanecen hasta que sean eliminados manualmente o por código.  
- No tiene límite de sesión, a diferencia de `sessionStorage`, que borra la información al cerrar el navegador.  
- Solo puede almacenar **cadenas de texto (strings)**.  

## ⚠️ Posibles errores y solución  
A veces, el `localStorage` puede presentar errores o datos corruptos. En estos casos, la solución más sencilla suele ser **borrar la información** y reiniciar el proceso.  

## 📌 Uso en una lista de TODOs  
Anteriormente, los **TODOs** iniciales se definían en un array dentro del código. Ahora, serán extraídos y actualizados en `localStorage` para garantizar persistencia.  

### 🛠️ Conversión de datos con JSON  
Dado que `localStorage` solo almacena **strings**, es necesario convertir estructuras de datos complejas:  

- **Guardar datos** en `localStorage`  
  ```js
  localStorage.setItem("todos", JSON.stringify(listaDeTodos));
