export const Llamando = (props) => {
  const {
    activar: { mensaje },
  } = props;
  return (
    <span className={`mensaje ${mensaje ? "" : " off"}`}>Llamando...</span>
  );
};
