import { useState, useEffect } from "react";

export const GetFetch = (url) => {
    const [resultado, setResultado] = useState({cargando:true, data:null, error:null})

    useEffect( () => {
        getDatos(url)
    }, [url])

    async function getDatos(url) {
        try {
            setResultado({cargando:true, data:null, error:null})
            const response = await fetch(url)
            const data = await response.json()
            setResultado({cargando:false, data, error: null})
        } catch (error) {
            setResultado({cargando:true, data:null, error:true})
            console.log(error)
        }
    }

    return resultado
}


