
import { Component } from "react";


function MapExample() {
  // Define una matriz de personas con nombre y edad
  const personas = [
    { nombre: "María", edad: 45 },
    { nombre: "Paula", edad: 22 },
    { nombre: "Ana", edad: 50 },
  ];

  // Retorna un fragmento de JSX que incluye un encabezado y una lista de personas mayores de 30
  return (
    <div>
      <h1>Saludos</h1>
      {/* Filtra las personas mayores de 30 y mapea cada una a un componente */}
      {personas
        .filter((persona) => persona.edad > 30)
        .map((persona) => (
          // Renderiza un componente para cada persona con sus propiedades nombre y edad
          <Component
            key={persona.id} 
            nombre={persona.nombre}
            edad={persona.edad}
          />
        ))}
    </div>
  );
}

// Exporta el componente MapExample como el componente por defecto de este archivo
export default MapExample;

// Este console.log es redundante y no tiene ningún efecto en la salida del código
console.log(MapExample);
