export const BotonBorrar = (props) => {
  const { borrarNumero } = props;
  return (
    <li>
      <button className="big" onClick={borrarNumero}>
        borrar
      </button>
    </li>
  );
};
