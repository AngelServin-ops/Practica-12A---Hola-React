1. ¿En qué se convirtió cada etiqueta del JSX con SWC?
R:
Modo clásico ("runtime": "classic"): Transforma el JSX en llamadas a la función React.createElement().

Modo automático ("runtime": "automatic"): Utiliza funciones internas (como _jsx) importadas de forma automática desde react/jsx-runtime para generar los elementos.

2. Si React es «sólo una biblioteca», ¿quién traduce el JSX?
R: La traducción la realiza una herramienta de compilación (como SWC, Babel o esbuild) durante el proceso de empaquetado (build). React no entiende JSX por sí solo en el navegador; necesita que estos transpiladores conviertan esa sintaxis a JavaScript estándar antes de ejecutarse.

3. ¿Qué hace createRoot y qué hace render?
R:
createRoot: Toma un elemento del DOM nativo (como un div vacío) y lo configura como la base donde operará el Virtual DOM de React.

render: Toma tu árbol de componentes y lo dibuja (inyecta) dentro de esa raíz previamente configurada.

4. ¿Por qué el nombre de un componente empieza con mayúscula?
R: Es la regla que usa React para distinguir tus componentes personalizados de las etiquetas HTML estándar. Si escribes una etiqueta en minúsculas (ej. <div>), React asume que es HTML nativo; si usas mayúscula inicial (ej. <MiComponente/>), entiende que es una función o clase tuya.

5. ¿Cuál es la diferencia entre escribir semestre="8" y semestre={8}?
R: 
semestre="8": Envía el dato exclusivamente como texto (string).

semestre={8}: Usa las llaves para evaluar el contenido como JavaScript puro, permitiendo que el valor pase como un número real (number), lo cual es clave para que TypeScript valide correctamente los tipos de datos.