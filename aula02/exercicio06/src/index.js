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

    this.state = ({produto:'', valor:0, marca:'', vetor:[]});
  }

  // Função de teclado
  teclado = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  // Função de cadastro
  cadastrar = (e) => {
    // Bloquear o action
    e.preventDefault();

    // Criar um objeto
    let obj = {
      'produto' : this.state.produto,
      'valor' : this.state.valor,
      'marca' : this.state.marca
    }

    // Cópia do vetor
    let vetorTemp = this.state.vetor;

    // Adicionar o obj no vetorTemp
    vetorTemp.push(obj);

    // Atualizar o vetor (state)
    this.setState({vetor:vetorTemp});
  }

  // Função de remoção
  remover = (e) => {
    
    // Criar uma cópia do vetor
    let vetorTemp = this.state.vetor;

    // Remover produto através da posição
    vetorTemp.splice(e.target.value, 1);

    // Atualizar o vetor (state)
    this.setState({vetor:vetorTemp});

  }


  // Render do componente
  render(){
    return(
      <Fragment>
        <form onSubmit={this.cadastrar}>
          <input type='text'   onChange={this.teclado} placeholder='Nome do produto'  name='produto' className='form-control' />
          <input type='number' onChange={this.teclado} placeholder='Valor do produto' name='valor'   className='form-control' />
          <input type='text'   onChange={this.teclado} placeholder='Nome da marca'    name='marca'   className='form-control' />
          <input type='submit' value='Cadastrar'       className='btn btn-primary' />
        </form>

        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Valor</th>
              <th>Marca</th>
              <th>Remover</th>
            </tr>
          </thead>

          <tbody>
            {this.state.vetor.map((p, i) => {
              return(
                <tr key={i}>
                  <td>{p.produto}</td>
                  <td>{p.valor}</td>
                  <td>{p.marca}</td>
                  <td><button className='btn btn-danger' value={i} onClick={this.remover}>Remover</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Fragment>
    )
  }

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));