import { Llamando } from "./components/Llamando";
import { BotonNumero } from "./components/BotonNumero";
import { useState } from "react";
import { Acciones } from "./components/Acciones";
import { BotonBorrar } from "./components/BotonBorrar";

function App() {
  const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [activar, setActivar] = useState({
    llamar: false,
    colgar: false,
    mensaje: false,
  });

  const anyadirNumero = (numero) => {
    if (numeroTelefono.length < 9) {
      setNumeroTelefono(numeroTelefono + numero);
      if (activar.llamar === true) {
        setActivar({ ...activar, llamar: false });
      }
      if ((numeroTelefono + numero).length === 9) {
        setActivar({ ...activar, llamar: true });
      }
    }
  };
  const borrarNumero = () => {
    setNumeroTelefono("");
    setActivar({ ...activar, llamar: false });
  };
  const colgar = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setActivar({ llamar: true, colgar: false, mensaje: false });
  };
  const activarMensaje = () => {
    setTimeout(() => {
      colgar();
    }, 5000);
  };

  const llamar = (e) => {
    e.preventDefault();
    setActivar({ llamar: false, colgar: true, mensaje: true });
    activarMensaje();
  };

  return (
    <div class="contenedor">
      {/* El siguiente elemento se oculta añadiéndole la clase "off"  */}
      <Llamando activar={activar} />
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
        <Acciones
          numeroTelefono={numeroTelefono}
          activar={activar}
          llamar={llamar}
          colgar={colgar}
        />
      </main>
    </div>
  );
}

export default App;
