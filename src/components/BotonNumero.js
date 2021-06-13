export const BotonNumero = (props) => {
  const { numero, anyadirNumero, activar } = props;
  return (
    <li>
      <button
        onClick={() => {
          anyadirNumero(numero);
        }}
        disabled={activar.teclado ? false : true}
      >
        {numero}
      </button>
    </li>
  );
};
