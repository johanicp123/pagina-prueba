import { Link } from "@remix-run/react/dist/components";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
    <body>
      <div className="App , p-2">
        <h5>HOT SALE -30% EN SANDALIAS</h5>
      </div>
      <div className="App2">
          <ul>
            <li><Link to={"/prueba/src/App.tsx"}>DIRECTORIO DE TIENDAS</Link> </li>
            <li>SERVICIO AL CLIENTE</li>
            <li>CUENTA</li>
          </ul>
      </div>
      </body>
    </>
  );
}

export default App;
