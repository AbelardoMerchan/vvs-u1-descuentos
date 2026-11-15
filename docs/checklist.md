# Checklist de revisión de requisitos y código

Marcar cada pregunta al revisar. Si la respuesta es "No", se registra un hallazgo.

## Requisitos

1. ¿Cada requisito tiene una métrica o criterio de aceptación que se pueda medir?
2. ¿Hay palabras vagas (rápido, importante, especial, correcto, fácil)?
3. ¿Los términos del negocio (cliente importante, promoción) están definidos?
4. ¿Algún requisito se contradice con otro o tiene excepciones sin explicar?
5. ¿Cada requisito se puede rastrear hasta un artefacto (código, prueba, doc)?
6. ¿Están definidos los valores límite (porcentaje 0, 100, precio 0)?
7. ¿Está definido el formato de salida (decimales, moneda)?

## Código

8. ¿Se validan los tipos y rangos de los parámetros de entrada?
9. ¿Qué pasa cuando `porcentaje` es negativo o mayor a 100?
10. ¿Se evitan números mágicos como el `10` del descuento VIP?
11. ¿Se comparan booleanos y valores con `===` y no con `==`?
12. ¿Se usa `let` o `const` en lugar de `var`?
13. ¿Todos los `if` tienen llaves?
14. ¿Los errores se informan con excepciones y no solo con `console.log`?
15. ¿Se maneja el redondeo de decimales en cálculos con dinero?
16. ¿Existe documentación breve de la función (parámetros y retorno)?
