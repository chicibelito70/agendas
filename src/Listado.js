import {useState, useEffect} from 'react';
import axios from 'axios';
import './Listado.css';
export default function ListadoPersonas(){
    const [personas, setPersonas] = useState([]);
    useEffect(()=>{
        axios.get('http://www.raydelto.org/agenda.php')
        .then(res =>{
            console.log(res);
            setPersonas(res.data);
        })
    }, []);
    return(
        <div className="listadoDiv">
            <p>Listado De Personas</p>
            <ul className="listado">{personas.map((persona, index) => <li key={index}>{persona.nombre} {persona.apellido} {persona.telefono}</li>)}</ul>
        </div>
    );
}