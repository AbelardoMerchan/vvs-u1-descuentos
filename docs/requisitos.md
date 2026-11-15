# Requisitos del módulo de descuentos

## 1. Requisitos originales y problemas detectados

| ID | Texto original | Problema | Tipo |
|----|----------------|----------|------|
| R-01 | El descuento debe calcularse rápidamente | "Rápidamente" no tiene métrica ni condiciones de medición | Ambigüedad / no verificable |
| R-02 | Los clientes importantes obtendrán un descuento especial | "Importantes" y "especial" no están definidos; no dice si es monto o porcentaje | Ambigüedad / incompleto |
| R-03 | El descuento no puede superar el precio, excepto en promociones | No define qué es una promoción ni cómo se identifica; la excepción rompe la regla | Contradicción parcial / incompleto |
| R-04 | Se debe mostrar el resultado correcto | "Correcto" no tiene criterio; no dice formato, redondeo ni moneda | Ambigüedad / no verificable |

## 2. Requisitos funcionales propuestos (verificables)

| ID | Requisito propuesto | Criterio de aceptación | Origen |
|----|---------------------|------------------------|--------|
| RF-01 | La función `calcularDescuento` debe responder en máximo 50 ms por llamada, medido sobre 1000 llamadas seguidas en el entorno de pruebas. | El promedio medido es <= 50 ms | R-01 |
| RF-02 | Si `esVip` es `true`, se suma al descuento un monto fijo adicional de 10 unidades monetarias. | `calcularDescuento(100, 10, true)` descuenta 20 en total y devuelve 80 | R-02 |
| RF-03 | El descuento total no puede ser mayor que el precio; el total nunca es negativo. Si `porcentaje` es menor que 0 o mayor que 100, o `precio` no es un número válido, se rechaza la entrada con un error. | `calcularDescuento(50, 100, true)` devuelve 0; `calcularDescuento(50, 120, false)` lanza error | R-03 |
| RF-04 | El resultado es `precio - descuento`, redondeado a 2 decimales y mostrado con formato de moneda. | `calcularDescuento(19.99, 15, false)` devuelve 16.99 | R-04 |

## 3. Supuestos de negocio pendientes de confirmación

| ID | Supuesto | A quién se confirma | Estado |
|----|----------|---------------------|--------|
| S-01 | El umbral de 50 ms es adecuado para la tienda (puede haber otra meta de rendimiento) | Dueño del producto | Pendiente |
| S-02 | "Cliente importante" = cliente VIP marcado con `esVip` | Dueño del producto | Pendiente |
| S-03 | El descuento VIP es un monto fijo de 10 y no un porcentaje | Dueño del producto | Pendiente |
| S-04 | Qué es una "promoción" y cómo se marca (por ahora no se implementa la excepción) | Dueño del producto | Pendiente |
| S-05 | Moneda y formato de visualización | Dueño del producto | Pendiente |

## 4. Matriz de trazabilidad

| ID | Problema | Impacto | Propuesta | Artefacto | Estado |
|----|----------|---------|-----------|-----------|--------|
| M-01 | R-01 sin métrica de tiempo | No se puede probar si se cumple; discusiones entre equipo y cliente | RF-01 con 50 ms por llamada | docs/requisitos.md | Propuesto |
| M-02 | R-02 no define "importante" ni "especial" | Cada desarrollador implementa distinto; cobros incorrectos a VIP | RF-02 con monto fijo y VIP por bandera | docs/requisitos.md, src/descuentos.js | Propuesto, falta S-03 |
| M-03 | R-03 excepción "promociones" sin definir | Descuentos mayores al precio y totales negativos | RF-03 con tope y validación; promociones fuera de alcance | docs/requisitos.md, src/descuentos.js | Implementado sin excepción, falta S-04 |
| M-04 | R-04 "correcto" sin criterio | Errores de redondeo y de formato | RF-04 con 2 decimales | docs/requisitos.md, src/descuentos.js | Propuesto |
| M-05 | Código no valida entradas | Resultados absurdos (total negativo, NaN) | Validación de entradas según RF-03 | src/descuentos.js | Corregido |
| M-06 | Código usa `var`, `==` y `if` sin llaves | Errores de alcance y de coerción de tipos | Reglas ESLint no-var, eqeqeq, curly | eslint.config.js, evidencias/ | Corregido |
