# React + Vite

## Publicación en agro-delivery.com/calculadora

Esta app se publica automáticamente en `https://agro-delivery.com/calculadora/`, protegida con usuario y contraseña. El sitio de Agro Delivery toma este repositorio, lo compila y publica solo el resultado estático. Para que siga funcionando:

- **`main` es producción.** Cada commit en `main` se publica solo, en pocos minutos. Usa otra rama para lo que todavía no esté listo.
- **Salida 100 % estática.** `npm ci` + `npx vite build` deben generar solo HTML, JS, CSS e imágenes: sin backend, sin variables de entorno ni secretos.
- **Funciona bajo una subruta.** El build se hace con `--base=/calculadora/`. No escribas URLs absolutas a la raíz (`/algo`) en el código: importa los assets desde `src/` o usa `import.meta.env.BASE_URL` para los de `public/`.
- **Sin scripts de instalación.** Las dependencias se instalan con `npm ci --ignore-scripts`, así que el build no debe depender de scripts `postinstall`.
- **Versión de Node.** Si necesitas una versión específica, declárala en `.nvmrc` o en `engines` del `package.json`; si no, se usa Node 22.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
