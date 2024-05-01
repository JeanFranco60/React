

// Dentro de este archivo, declarar un componente que reciba una prop llamada name y un mensaje de bienvenida dentro de un <h1>. Por ejemplo: si el valor de la prop name es “María Pérez”, el componente tiene que mostrar una etiqueta h1 con el texto “¡Bienvenido/a a React, María Pérez!”.

import React from 'react';

function Welcome({ name }) {
  return <h1>¡Bienvenido/a a React, {name}!</h1>;
}


export default Welcome;
