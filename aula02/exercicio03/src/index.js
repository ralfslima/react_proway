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

        this.state=({valor:0, pagamento:0});
    }

    // Função para obter os dados do formulário
    obterDados = (e) => {
        
        let nome = e.target.name
        let valor = e.target.value;

        this.setState({[nome]:valor});

    }

    // Função para calcular
    calcular = (e) => {

        // Não faz o redirecionamento
        e.preventDefault();

        // Condicional
        if(parseFloat(this.state.pagamento) === 0){
            alert('Favor informar o tipo do pagamento!');
        }else if(parseFloat(this.state.pagamento) === 1 && this.state.valor >= 100){
            alert(`Desconto de 10%, total a pagar R$ ${this.state.valor * 0.9}`)
        }else{
            alert(`Pagamento integral, total a pagar R$ ${this.state.valor}`)
        }
        
    }

    // Render
    render(){
        return(
            <Fragment>
                <p>Valor: {this.state.valor}</p>
                <p>Pagamento: {this.state.pagamento}</p>

                <form onSubmit={this.calcular}>
                    <input type='number' name='valor' onChange={this.obterDados} placeholder='Informe o valor do produto' className='form-control' />

                    <select className='form-control' name='pagamento' onChange={this.obterDados} >
                        <option value='0'>Forma de pagamento</option>
                        <option value='1'>À vista</option>
                        <option value='2'>A prazo</option>
                    </select>

                    <input type='submit' className='btn btn-primary' />
                </form>
            </Fragment>
    )}

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));