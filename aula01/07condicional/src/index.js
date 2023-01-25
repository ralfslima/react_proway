// Importações
import React from 'react';
import ReactDom from 'react-dom';

// Componente
class Componente extends React.Component{

  // Construtor
  constructor(props){
    super(props);

    this.state = {exibir : false};
  }

  // Função para alterar o valor do state
  acao = () =>{
    this.setState({exibir:!this.state.exibir});
  }

  // Render
  render(){

    // Variável contendo o valor se verdadeiro ou falso
    let texto = '';

    // Condicional
    if(this.state.exibir === true){
      texto = <h1>Hello World!</h1>;
    }else{
      texto = <h1>Nada para exibir</h1>
    }

    return(
      <div>
        {texto}
        <button onClick={this.acao}>Clique aqui</button>
      </div>
    )
  }

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));