import './PokemonItem.css'
import { Link } from 'react-router-dom'

import { GetFetch } from '../servicios/GetFetch'


export function PokemonItem({ url }) {

    const estado = GetFetch(url)
    const { cargando, data } = estado

    return (
        <div>
            {
                cargando ?
                    <div>Cargando...</div>
                    :
                    (
                        <div className="container-item">
                        
                            <h2 className='pokemon-name'>{data.name}</h2>
                            <img src={data.sprites.front_default} alt="" />

                            <div className="container-flex">
                                <div className="container-details">
                                    <p>Altura: <b>{data.height}</b></p>
                                    <p>Peso: <b>{data.weight}</b></p>
                                    <p>Speed: <b>{data.stats[5].base_stat}</b></p>

                                </div>
                                <div className="container-details">
                                    <p>Hp: <b>{data.stats[0].base_stat}</b></p>
                                    <p>Defense: <b>{data.stats[1].base_stat}</b></p>
                                    <p>Attack: <b>{data.stats[2].base_stat}</b></p>
                                </div>  
                            </div>

                            <Link to={`/pokemon/${data.name}`}>
                            <button id='btn-details'>Detalles</button>
                            </Link>
                        </div>

                    )
            }
        </div>
    )
}