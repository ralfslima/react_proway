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

        this.state=({cep:'', endereco:{}});
    }

    // Função para obter os dados do formulário
    obterDados = (e) => {

      let nome = e.target.name;
      let valor = e.target.value;

      this.setState({[nome]:valor});

    }


    // BuscarCep
    buscarCep = (e) => {
      e.preventDefault();

      fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(retorno => retorno.json())
      .then(retorno_json => this.setState({endereco:retorno_json}));
    }

    // Render
    render(){
        return(
            <Fragment>
                <form onSubmit={this.buscarCep}>
                    <input type='text' name='cep' onChange={this.obterDados} placeholder='Informe o cep' className='form-control' />
                    <input type='submit' className='btn btn-primary' />
                </form>

                <ul>
                  <li>{this.state.endereco.uf}</li>
                  <li>{this.state.endereco.localidade}</li>
                  <li>{this.state.endereco.bairro}</li>
                  <li>{this.state.endereco.logradouro}</li>
                </ul>
            </Fragment>
    )}

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));