# Acta de revisión del pull request

Pull request: fix/hallazgos-inspeccion hacia main

| # | Archivo y línea | Comentario técnico | Respuesta del autor |
|---|-----------------|--------------------|---------------------|
| 1 | src/descuentos.js, validación de `porcentaje` | Se rechaza porcentaje fuera de 0 a 100 con `RangeError`. Está bien para RF-03, pero hay que confirmar con el cliente si un porcentaje mayor a 100 puede ser válido en promociones (S-04). | Se deja el rechazo por ahora y la excepción queda registrada como pendiente. |
| 2 | src/descuentos.js, `DESCUENTO_VIP_FIJO` | El 10 fijo sigue siendo un supuesto (S-03). Si el negocio quiere un porcentaje VIP, esta constante y RF-02 cambian. Además falta redondeo a 2 decimales (H-08). | Se deja como constante con nombre y el redondeo pasa a la segunda iteración. |

Resultado: aprobado con observaciones. Lint final sin errores (evidencias/lint-final.txt).
