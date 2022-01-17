import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContainerForm = styled.div`
    background-color: #FFF;
    padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      yaer: '',
      plan: ''
    }
  });

  // spinner 
  const [cargando, guardarCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Container>
        <Header 
          titulo='Cotizador de Seguros'
        />

        <ContainerForm>
          <Form 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />

          { cargando ? <Spinner/> : null}

          <Resumen 
            datos={datos}
          />

          { !cargando
            ? 
              <Resultado 
                cotizacion={cotizacion}
              /> 
            : null
          }
        </ContainerForm>
    </Container>
  );
}

export default App;
