export const BotonNumero = (props) => {
  const { numero, anyadirNumero } = props;
  return (
    <li>
      <button
        onClick={() => {
          anyadirNumero(numero);
        }}
      >
        {numero}
      </button>
    </li>
  );
};
