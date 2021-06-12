export const BotonBorrar = (props) => {
  const { borrarNumero, activar } = props;
  return (
    <li>
      <button
        className="big"
        onClick={borrarNumero}
        disabled={activar.teclado ? false : true}
      >
        borrar
      </button>
    </li>
  );
};
