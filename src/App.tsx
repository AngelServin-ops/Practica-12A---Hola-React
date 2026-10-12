import React from 'react';
import { Saludo } from './Saludo';
import { TarjetaPerfil } from './TarjetaPerfil';

export function App() {
  return (
    <main className="pagina">
      <Saludo nombre="Ingeniería de Software" />

      <section className="equipo">
        <TarjetaPerfil nombre="Angel Servin de la mora" carrera="Ingeniería de Software" semestre={7} />
        <TarjetaPerfil nombre="Andrea Melendrez" carrera="Ingeniería de Software" semestre={7} />
        <TarjetaPerfil nombre="Dana Chavez" carrera="Ingeniería en Sistemas" semestre={8} />
      </section>
    </main>
  );
}

export default App;