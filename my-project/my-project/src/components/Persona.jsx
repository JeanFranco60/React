import React from 'react';

function Persona({ nombre, edad }) {
  let mensaje;

  if (edad < 18) {
    mensaje = "Lo sentimos, no tiene edad legal para beber alcohol";
  } else {
    mensaje = "Bienvenido. Lo invitamos a tomar una cerveza";
  }

  return (
    <div>
      <p>Tu nombre: {nombre}</p>
      <p>{mensaje}</p>
    </div>
  );
}

export default Persona;
