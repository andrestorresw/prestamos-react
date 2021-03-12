import React, {Fragment} from 'react'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'

function App() {
  return (
    <Fragment>
      <Header
        titulo = "Cotstamos"
      />

    <div className = 'container'>
      <Formulario />
    </div>
    </Fragment>
  );
}



export default App;
