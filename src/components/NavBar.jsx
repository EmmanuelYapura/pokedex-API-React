import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    const inputSearch = useRef()
    const [valorId, setValorId] = useState()
    let navigate = useNavigate();

    const findPokemon = () => {
        inputSearch.current.value = ''
    }

    const getValue = () => {
        let cadena = inputSearch.current.value
        setValorId(cadena.toLowerCase())
    }

    const pressButton = (event) => {
        if (event.key === 'Enter' && inputSearch.current.value !== '') {
            inputSearch.current.value = ''
            navigate(`/pokemon/${valorId ? valorId : 'error'}`)
        }
    }

    return (
        <div className='container-nav'>
            <nav className='nav-bar'>
                <span className="logo">POKEMON!</span>
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
