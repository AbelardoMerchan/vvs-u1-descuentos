# VVS U1 - Auditoría estática del módulo de descuentos

Actividad de la Unidad 1 de Verificación y Validación de Software: se revisan requisitos ambiguos, se inspecciona el código de `calcularDescuento` y se usa ESLint para detectar defectos antes de ejecutar el programa.

## Estructura

```
src/                 código del módulo (descuentos.js)
docs/                requisitos, checklist, inspección y acta de revisión
evidencias/          salida de ESLint antes y después (lint-inicial.txt, lint-final.txt)
eslint.config.js     configuración de ESLint
package.json         scripts del proyecto
```

## Cómo reproducirlo

```
git clone <URL-DEL-REPOSITORIO>
cd vvs-u1-descuentos
npm install
npm run lint
```

Para ver el análisis inicial, usar el commit "chore: configurar ESLint..." y ejecutar `npm run lint`: salen 5 errores y 1 advertencia. En la rama final sale sin problemas.

## Documentos

- [Requisitos y matriz de trazabilidad](docs/requisitos.md)
- [Checklist de revisión](docs/checklist.md)
- [Inspección por pares](docs/inspeccion.md)
- [Acta de revisión del pull request](docs/acta-revision.md)

## Reglas de ESLint usadas

| Regla | Para qué sirve |
|-------|----------------|
| no-var | Evita `var` por su alcance de función y redeclaración |
| eqeqeq | Obliga a usar `===` y evita coerción de tipos |
| no-unused-vars | Detecta variables declaradas que no se usan |
| curly | Obliga a poner llaves en los `if` |
| no-console | Avisa de `console.log` usados como manejo de errores |

## Pendientes para la segunda iteración

- Confirmar supuestos S-01 a S-05 de `docs/requisitos.md`.
- Redondeo a 2 decimales y formato de moneda (RF-04).
- Definir y implementar la excepción de promociones.
- Documentar la función y agregar pruebas dinámicas.
