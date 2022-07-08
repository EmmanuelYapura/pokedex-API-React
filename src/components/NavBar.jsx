import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    const inputSearch = useRef()
    const [valorId, setValorId] = useState()

    const findPokemon = () => {
        inputSearch.current.value = ''
    }

    const getValue = (e) => {
        e.preventDefault()
        let cadena = inputSearch.current.value
        setValorId(cadena.toLowerCase())
    }

    const pressButton = (event) => {
        if(event.key !== 'Enter') return
        alert('Presione el boton para realizar la busqueda!')
    }

    return (
        <div className='container-nav'>
            <nav className='nav-bar'>
                <a href="#" className="logo">POKEMON!</a>
                <div className='find-pokemon'>
                    <input 
                    onChange={getValue} 
                    ref={inputSearch} 
                    type="text" 
                    placeholder='Ingresar ID o Nombre' 
                    onKeyDown={pressButton}
                    />
                    <Link to={`/pokemon/${valorId ? valorId : 'error'}`}>
                        <button onClick={findPokemon} className="find">F</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
