import { useState } from 'react'
import './ToDoList.css'

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  }

  const borrarTareas = () => {
    setTareas([]);
  }
  return (
    <>
      <div className= "container" style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Lista de Tareas</h2>
        <input
          type="text"
          placeholder="Escribe una tarea ... "
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
        <button onClick={borrarTareas}>Borrar todas</button>
        <ul>
          {tareas.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
