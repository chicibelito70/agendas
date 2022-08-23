import './FormDatos.css';
import {useState} from 'react';


export default function FetchData(){
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    async function PostData(){

        try{
            let resultado = await fetch('http://www.raydelto.org/agenda.php', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    telefono: telefono
                })
            });
            console.log("TERMINADO");
        }catch(e){
            console.error(e);
        }
    }
    return(
        
        <div className='inputs'>
            <h1>Formularios</h1>
            <input type="text" className='input' placeholder='Nombre' onChange={e => setNombre(e.target.value)}/>
            <input type="text" className='input' placeholder='Apellido' onChange={e =>setApellido(e.target.value)}/>
            <input type="text" className='input' placeholder='Telefono' onChange={e =>setTelefono(e.target.value)}/>

            <button className='enviar' onClick={()=>PostData()}>Enviar datos</button>
        </div>
    )
}