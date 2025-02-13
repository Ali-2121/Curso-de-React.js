# 📌 Custom Hooks en React  

Los **Custom Hooks** permiten extraer la lógica de los componentes para **abstraerla**, **reutilizarla** y mantener un código más limpio y modular.  

## 🔹 Características de los Custom Hooks  
- Son funciones de JavaScript que siguen las reglas de los Hooks de React.  
- Se nombran con el prefijo **`use`** para diferenciarlos de funciones normales.  
- Permiten reutilizar lógica en múltiples componentes sin duplicar código.  
- Pueden retornar **valores primitivos, objetos, arrays** u otras funciones.  
- Existen **Hooks integrados** en React, como `useState`, `useEffect`, `useContext`, etc., pero también se pueden crear Custom Hooks personalizados.  

## 📌 ¿Cuándo usar Custom Hooks?  
No hay una regla estricta para cuándo utilizarlos. Su propósito principal es **facilitar el desarrollo** y mejorar la **organización del código**. Se recomienda usarlos cuando:  
✅ Se repite lógica en varios componentes.  
✅ Se necesita separar la lógica del estado de la UI.  
✅ Se requiere una forma sencilla de compartir estado entre componentes.  

## 🔨 **Reglas para crear Custom Hooks**  
1️⃣ **Usar el prefijo `use`** → React los reconoce como Hooks (`useLocalStorage`, `useFetch`, etc.).  
2️⃣ **Utilizar otros Hooks de React** → Como `useState`, `useEffect`, `useContext`, etc.  
3️⃣ **No usarlos dentro de condicionales o bucles** → Siguen las mismas reglas que los Hooks normales.  
