// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Classe
class Componente extends React.Component{

  // Construtor
  constructor(props){
    
    // Obter todos os props (propriedades) do componente
    super(props);

    // States (variável)
    this.state = {
      nome : 'Ralf',
      email: this.props.email
    };

  }

  // Render
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h1>{this.state.email}</h1>
      </div>
    )
  }
  

}

// Render
ReactDOM.render(<Componente email='ralflima@gmail.com' />, document.getElementById('root'));