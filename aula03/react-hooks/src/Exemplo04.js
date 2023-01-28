// Importações
import React, {Fragment, useEffect, useState} from 'react';

// CSS
import './exemplo04.css';

// Componente
export default function Exemplo03({titulo}){

    // State
    const [vetor, setVetor] = useState([]);

    // useEffect - Executa após o render ser realizado
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(retorno => retorno.json())
        .then(pokemons => setVetor(pokemons.results));
    }, []);

    // Render
    return(
        <Fragment>
            <h1>{titulo}</h1>

            <ul>
                {vetor.map((obj, i) => {
                    return(
                        <li>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
                            <p>{obj.name}</p>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )

}