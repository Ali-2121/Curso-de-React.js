# Apuntes sobre React Context

## ✨ ¿Qué es React Context?

React Context es una herramienta integrada en React que permite crear **estados globales**, facilitando la comunicación entre componentes sin necesidad de pasar props manualmente a través de todos los niveles del árbol de componentes (**prop drilling**).
Se pueden tener tantos contextos como sea necesario.

---

## 🌐 Prop Drilling

**Prop Drilling** es un patrón que ocurre cuando los datos deben ser pasados desde un componente padre a uno hijo a través de múltiples niveles intermedios.

- Es común en aplicaciones grandes.
- Puede volver el código menos legible y más propenso a errores.

**Ejemplo**: Pasar un estado desde un componente abuelo hasta un nieto pasando por el padre aunque este último no lo necesite.

---

## 📁 ¿Para qué sirve React Context?

Context permite establecer una **comunicación directa** entre componentes que están en distintos niveles del árbol de React, sin importar su relación jerárquica.

> Se puede pensar como una "nube" donde se almacenan estados, funciones y datos que se comparten entre componentes.

Ventajas:

- Mejora la legibilidad del código.
- Evita la duplicidad de props.
- Permite una estructura de comunicación **horizontal** entre componentes.

---

## ⚖️ Elementos clave del Contexto

### 1. Crear el contexto

```jsx
const MyContext = React.createContext();
```

Esto devuelve un objeto con dos componentes:

- `<MyContext.Provider>`: Provee el valor a los componentes hijos.
- `<MyContext.Consumer>`: Permite consumir el valor desde cualquier componente hijo.

---

### 2. Usar el Provider

```jsx
<MyContext.Provider value={{ valor }}>
  {/* Componentes hijos */}
</MyContext.Provider>
```

Todo lo que esté dentro del `Provider` puede acceder a `valor` mediante `Consumer` o `useContext`.

---

### 3. Usar el Consumer (Render Props)

```jsx
<MyContext.Consumer>
  {(valor) => (
    <p>{valor}</p>
  )}
</MyContext.Consumer>
```

> El Consumer usa el patrón **Render Props**, donde su hijo debe ser una **función** que recibe el valor del contexto.

---

### ✨ Alternativa: `useContext`

```jsx
import { useContext } from 'react';
const valor = useContext(MyContext);
```

- Es la forma moderna y preferida para consumir un contexto.
- Hace el código más limpio y conciso.
- Esto es un  react hook 

---

## 📊 Conclusión

React Context es una forma poderosa y eficiente de compartir datos globales entre componentes sin necesidad de prop drilling. Es especialmente útil para manejar temas globales como:

- Estados de sesión o autenticación.
- Tema (claro/oscuro).
- Idioma.
- Estados de carga o errores compartidos.



