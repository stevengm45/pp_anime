import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { url } from '../helpers/url';
import '../styles/List.css';

export const List = () => {

    const [registro,setRegistro] = useState([])

    const getData = () => {
        axios.get(url)
        .then((response) =>{
            setRegistro(response.data);
        
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    const deleteData = (id) => {
        axios.delete(url +id)
        .then((response) =>{
            getData() //actualiza la info
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
        Swal.fire(
            'Anime Eliminado!',
            'You clicked the button!',
            'success'
          )

    }
    useEffect(() => {
        getData()
    }, []);
   
    return (
        <div className='main'>
            <div className='contenedor-cards'>
            {
                         registro.map(reg  => (
                             <div key={reg.id} className="card-anime">
                                <div ><img src={reg.imagen} alt='' className='img-anime' /></div>
                                <div className='content-info'>
                                    <div className='nombre-anime'>{reg.nombre}</div>
                                    <div className='genero-anime'>Genero: {reg.genero}</div>
                                    <div className='studio-anime'>Studio: {reg.studios}</div>
                                    <div className='temporada-anime'>Tipo: {reg.temporadas}</div>
                                    
                                    <div><button onClick={() => deleteData(reg.id)} className="btn-eliminar">Eliminar</button></div>
                                </div>
                             </div>
                        ))
                     } 
            </div>
            {/* <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Studios</th>
                    <th>Temporadas</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(reg  => (
                             <tr key={reg.id}>
                                <td>{reg.nombre}</td>
                                <td>{reg.genero}</td>
                                <td>{reg.studios}</td>
                                <td>{reg.temporadas}</td>
                                <td><img src={reg.imagen} width="40px" height="30px" alt='' /></td>
                                <td><button onClick={() => deleteData(reg.id)}>Eliminar</button></td>
                             </tr>
                        ))
                     } 
                     
                 </tbody>
            </table> */}
        </div>
    )
}