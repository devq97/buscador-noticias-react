import React, { Fragment, useState, useEffect } from 'react';
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoNoticias from "./Components/ListadoNoticias";

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const key = 'bd7a30c95307495a974532b044a2a458';
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${key}`;

      const resultado = await fetch(url);
      const noticias = await resultado.json();

      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
