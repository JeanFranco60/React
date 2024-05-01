//Description, el cual debe renderizar un elemento <p> que muestre “Mi nombre es ” + nombre, siendo nombre una prop.

import React from 'react';

function Description({ nombre }) {
  return <p>Mi nombre es {nombre}</p>;
}

export default Description;
