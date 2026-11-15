const DESCUENTO_VIP_FIJO = 10;

function calcularDescuento(precio, porcentaje, esVip) {
  if (typeof precio !== "number" || !Number.isFinite(precio) || precio < 0) {
    throw new TypeError("El precio debe ser un número mayor o igual a 0");
  }
  if (typeof porcentaje !== "number" || !Number.isFinite(porcentaje) || porcentaje < 0 || porcentaje > 100) {
    throw new RangeError("El porcentaje debe estar entre 0 y 100");
  }

  let descuento = (precio * porcentaje) / 100;
  if (esVip === true) {
    descuento += DESCUENTO_VIP_FIJO;
  }
  if (descuento > precio) {
    descuento = precio;
  }

  return precio - descuento;
}

module.exports = { calcularDescuento };
