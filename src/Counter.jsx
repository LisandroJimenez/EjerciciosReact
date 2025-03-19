import React from "react";
import { useState } from 'react'
import './App.css'
function Counter  () {


  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Contador: {count}</h1>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ marginRight: "10px", padding: "10px" }}
        >
          Aumentar
        </button>
        <button
          onClick={() => setCount((count) => (count - 1 ))}
          style={{marginRight: "10px", padding: "10px" }}
          disabled={count === 0}
        >
          Disminuir
        </button>
        <button
          onClick={() => setCount((count) => (count =0 ))}
          style={{ padding: "10px" }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
};

export default Counter
