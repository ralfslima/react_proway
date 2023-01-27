// Importações
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// Componente
class Componente extends React.Component{

  // Construtor
  constructor(props){
    super(props);

    this.state = ({produto:'', valor:0, marca:'', vetor:[]});
  }

  // Render do componente
  render(){
    return(
      <Fragment>
        <h1>TESTE!</h1>
      </Fragment>
    )
  }

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));