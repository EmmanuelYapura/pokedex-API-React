import { useParams } from 'react-router-dom'
import { GetFetch } from '../servicios/GetFetch'
import { Link } from 'react-router-dom'
import './PokemonDetail.css'

export function PokemonDetail() {
	let { id } = useParams()
	let url = `https://pokeapi.co/api/v2/pokemon/${id}`

	const estado = GetFetch(url) 
	const { cargando, data, error } = estado

	return (
		<div className='container padding'>
			{
				!cargando ?
					(
						<div className="container-details-item">
							<h2 className='pokemon-detail-name'>{data.name}</h2>
							<img src={data.sprites.front_default} alt="" />

							<div className="container-detail-pokemon">
								<p>Altura: <b>{data.height}</b></p>
								<p>Peso: <b>{data.weight}</b></p>
								<p>Speed: <b>{data.stats[5].base_stat}</b></p>
								<p>Hp: <b>{data.stats[0].base_stat}</b></p>
								<p>Defense: <b>{data.stats[1].base_stat}</b></p>
								<p>Attack: <b>{data.stats[2].base_stat}</b></p>
							</div>

							<Link to={'/'}>
								<button>Volver</button>
							</Link>
						</div>
					)
					:
					error ?
						<div className='container-error padding'>
							<h1>El id o pokemon ingresado no existe!</h1>
							<Link to={'/'}>
								<button>Volver</button>
							</Link>
						</div>
						:
						<div>Cargando...</div>
			}
		</div>
	)
}
