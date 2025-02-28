# 📌 Efectos en React

El hook **useEffect** se usa para manejar efectos secundarios en los componentes funcionales.

## 🔹 Beneficios del uso de useEffect

- Evita bloqueos en la UI, ejecutando lógica pesada fuera del flujo principal.

- Optimiza la renderización, ya que permite ejecutar efectos solo cuando son necesarios.

- Sustituye los métodos del ciclo de vida (componentDidMount, componentDidUpdate, componentWillUnmount).

## 🔹 Funcionamiento de useEffect

La función useEffect recibe como primer argumento una función de efecto y, opcionalmente, puede recibir un array de dependencias como segundo argumento.

📌 Si se envían otros estados como dependencias, el efecto se ejecutará solo cuando estos cambien, sin importar cambios en otros estados.

📌 Si el array de dependencias está vacío ([]), el efecto solo se ejecutará una vez, justo después del primer renderizado del componente. No se volverá a ejecutar en ningún otro momento, a menos que el componente se desmonte y se monte nuevamente.

Esto mejora la experiencia del usuario y reduce el tiempo de renderización, evitando ejecuciones innecesarias.
