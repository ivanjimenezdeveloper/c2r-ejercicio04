export const Acciones = (props) => {
  const { numeroTelefono, activar, llamar, colgar } = props;
  return (
    <div class="acciones">
      <span class="numero">{numeroTelefono}</span>
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <a
        href="llamar"
        className={`llamar${activar.llamar ? " activo" : " off"}`}
        onClick={llamar}
      >
        Llamar
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a
        href="colgar"
        className={`colgar${activar.colgar ? " activo" : " off"}`}
        onClick={colgar}
      >
        Colgar
      </a>
    </div>
  );
};
