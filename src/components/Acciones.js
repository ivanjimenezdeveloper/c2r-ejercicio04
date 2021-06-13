export const Acciones = (props) => {
  const { numeroTelefono, activar, llamar, colgar } = props;
  return (
    <div className="acciones">
      <span className="numero">{numeroTelefono}</span>
      {activar.llamar && (
        <>
          <a
            href="llamar"
            className={`llamar${activar.llamar ? " activo" : " off"}`}
            onClick={llamar}
          >
            {" "}
            Llamar
          </a>
        </>
      )}
      {activar.colgar && (
        <>
          <a
            href="colgar"
            className={`colgar${activar.colgar ? " activo" : " off"}`}
            onClick={colgar}
          >
            Colgar
          </a>
        </>
      )}
    </div>
  );
};
