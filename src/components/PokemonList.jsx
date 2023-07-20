import { useState } from 'react';
import { GetFetch } from '../servicios/GetFetch';
import { PokemonItem } from './PokemonItem';
import './PokemonList.css'

export function PokemonList() {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

	const estado = GetFetch(url)
	const { cargando, data } = estado

	return (
		cargando ? 
			<div>Cargando...</div>
			:
			(
				<div className='container'>
       				<h1 className='title-container'>Pokemon's List</h1>
					<div className='container-grid'>
						{data.results.map(pokemon => (
							<PokemonItem key={pokemon.name} url={pokemon.url} />
						))}
					</div>
					<div className="container-btn">
						<button className='btn-previus' onClick={() => {
							data.previous ?
								setUrl(data.previous)
								: 
								console.log('No hay elementos anteriores')
						}} >Prev</button>
						<button className='btn-next' onClick={() => { 
							data.next?
							setUrl(data.next) 
							:
							console.log('No hay elementos posteriores')
						}} > Next </button>
					</div>
				</div>
			)
	)
}