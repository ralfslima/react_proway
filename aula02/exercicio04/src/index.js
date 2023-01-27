// Importações
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state=({numero:0, tabuada:[]});
    }

    // Função para obter os dados do formulário
    obterDados = (e) => {

      let nome = e.target.name;
      let valor = e.target.value;

      this.setState({[nome]:valor});

    }

    // Função para realizar a tabuada
    tabuada = (e) => {
      e.preventDefault();

      // Vetor temporário
      let calculos = [];

      // Laço de repetição
      for(let i=1; i<=10; i++){
        calculos.push(this.state.numero * i);
      }

      // Adicionar no state tabuada
      this.setState({tabuada:calculos});
    }

    // Render
    render(){
        return(
            <Fragment>
                <form onSubmit={this.tabuada}>
                    <input type='number' name='numero' onChange={this.obterDados} placeholder='Informe o número' className='form-control' />
                    <input type='submit' className='btn btn-primary' />
                </form>
                
                <ul>
                  {this.state.tabuada.map((n, i) => {
                    return <li key={i}>{this.state.numero} X {i+1} = {n}</li>
                  })}
                </ul>
            </Fragment>
    )}

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));