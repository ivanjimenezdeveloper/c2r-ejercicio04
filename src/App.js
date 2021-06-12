import { Llamando } from "./components/Llamando";
import { BotonNumero } from "./components/BotonNumero";
import { useState } from "react";
import { Acciones } from "./components/Acciones";
import { BotonBorrar } from "./components/BotonBorrar";

function App() {
  const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const anyadirNumero = (numero) => {
    if (numeroTelefono.length < 9) setNumeroTelefono(numeroTelefono + numero);
  };
  const borrarNumero = () => {
    setNumeroTelefono("");
  };

  return (
    <div class="contenedor">
      {/* El siguiente elemento se oculta añadiéndole la clase "off"  */}
      <Llamando />
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {numeros.map((numero) => (
              <BotonNumero
                numero={numero}
                key={numero}
                anyadirNumero={anyadirNumero}
              />
            ))}

            <BotonBorrar borrarNumero={borrarNumero} />
          </ol>
        </div>
        <Acciones numeroTelefono={numeroTelefono} />
      </main>
    </div>
  );
}

export default App;
