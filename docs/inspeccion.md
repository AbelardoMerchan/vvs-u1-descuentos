# Inspección por pares de src/descuentos.js

Inspección hecha sin ejecutar pruebas funcionales, solo leyendo el código, comparándolo con docs/requisitos.md y con docs/checklist.md, y con ayuda de ESLint.

## Roles

| Rol | Persona | Tarea |
|-----|---------|-------|
| Autor | [Nombre del autor] | Explica el código y lo corrige |
| Revisor | [Nombre del revisor] | Lee el código con el checklist y encuentra defectos |
| Registrador | [Nombre del registrador] | Anota los hallazgos, la severidad y las decisiones |

## Hallazgos

| ID | Origen | Línea | Hallazgo | Severidad | Evidencia | Acción | Estado |
|----|--------|-------|----------|-----------|-----------|--------|--------|
| H-01 | ESLint (no-var) | 2 y 5 | Se usa `var`, que tiene alcance de función y permite redeclarar | Media | evidencias/lint-inicial.txt | Cambiar a `let` y `const` | Corregido |
| H-02 | ESLint (eqeqeq) | 3 | `esVip == true` compara con coerción de tipos; el valor `1` o `"true"` podría contar como VIP | Media | evidencias/lint-inicial.txt | Usar `esVip === true` | Corregido |
| H-03 | ESLint (curly) | 3 y 4 | Los `if` no tienen llaves; al agregar una línea se puede romper la lógica | Baja | evidencias/lint-inicial.txt | Agregar llaves en todos los `if` | Corregido |
| H-04 | Revisión humana (con aviso de no-console) | 4 | Con porcentaje > 100 solo se imprime un mensaje y el cálculo sigue, devolviendo un total negativo | Alta | Línea 4 vs R-03 / RF-03 | Lanzar `RangeError` en vez de `console.log` | Corregido |
| H-05 | Revisión humana | 1 | No se validan los parámetros: precio negativo, `NaN`, texto o porcentaje negativo dan resultados absurdos | Alta | Checklist pregunta 8 y 9 | Validar tipos y rangos y lanzar error | Corregido |
| H-06 | Revisión humana | 3 y 5 | El descuento VIP (+10) puede superar el precio (ej. precio 5, VIP) y el total queda negativo | Alta | R-03 y RF-03 | Limitar el descuento al precio | Corregido |
| H-07 | Revisión humana | 3 | El `10` del descuento VIP es un número mágico sin nombre | Baja | Checklist pregunta 10 | Pasarlo a la constante `DESCUENTO_VIP_FIJO` (sin cambiar el valor) | Corregido |
| H-08 | Revisión humana | 5 | No hay redondeo a 2 decimales; con flotantes puede salir 16.990000000000002 | Media | RF-04 | Redondear a 2 decimales | Pendiente (falta confirmar S-05 con el cliente) |
| H-09 | Revisión humana | 1 | La función no tiene documentación de parámetros ni retorno | Baja | Checklist pregunta 16 | Documentar en la segunda iteración | Pendiente |

## Qué encontró cada método

- Solo ESLint: H-01, H-02, H-03.
- ESLint avisó y la revisión humana dio el significado: H-04 (ESLint solo dice que hay un `console`, no que la lógica es incorrecta).
- Solo revisión humana: H-05, H-06, H-07, H-08, H-09.

La regla `no-unused-vars` está activa pero no marcó nada porque en el código inicial todas las variables se usan.

## Decisiones

- Solo se corrigieron los hallazgos con regla o requisito confirmado (H-01 a H-07).
- H-08 queda pendiente hasta confirmar formato y moneda (S-05).
- La excepción de "promociones" de R-03 no se implementó porque falta definirla (S-04).
- El descuento VIP se deja como monto fijo de 10 hasta confirmar S-03.
