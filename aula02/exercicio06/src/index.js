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
        <form>
          <input type='text'   placeholder='Nome do produto'  name='produto' className='form-control' />
          <input type='number' placeholder='Valor do produto' name='produto' className='form-control' />
          <input type='text'   placeholder='Nome da marca'    name='produto' className='form-control' />
          <input type='submit' value='Cadastrar'              className='btn btn-primary' />
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

          <tbody></tbody>
        </table>
      </Fragment>
    )
  }

}

// Render
ReactDom.render(<Componente />, document.getElementById('root'));