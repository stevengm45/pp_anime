import axios from 'axios';
import React, { useState } from 'react';
import { fileUpload } from '../helpers/fileUpload';
import { url } from '../helpers/url';
import '../styles/Form.css';


export const Form = () => {


    const [anime, setAnime] = useState ({
        nombre: '',
        genero: '',
        studios: '',
        temporadas: '',
        imagen: ''
    })

    const { nombre, genero, studios, temporadas, imagen } = anime

    const handleChanged = ({ target }) => {
        setAnime({
            ...anime,
            [target.name]: target.value
        })
    }

    const handleFileChanged = e => {
        const file = e.target.files[0]
        fileUpload(file)
        .then(resp => {
            anime.imagen = resp
        }).catch(error=>{
            console.log(error)
        })
    }

    const postData = () => {
        axios.post(url, anime)
            .then(resp => console.log(resp.data))
            .catch(error => console.log(error))
    }

    const handleSubmit = e => {
        e.preventDefault()
        postData()
        setAnime({
            nombre: '',
        genero: '',
        studios: '',
        temporadas: '',
        imagen: ''
        })
    }

    return (
        <div>
            <div className='div-form'>
           <form id="formulario" onSubmit={handleSubmit} className="formulario">
           <h2>Registra un tu anime preferido</h2>
               <div>
                   <label>Nombre</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               <div>
                  <label>Genero</label>
                   <select id="selectGenero" name="genero" value={genero} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar"></option>
                       <option name="Gore" value="Gore">Gore</option>
                       <option name="Accion" value="Accion">Accion</option>
                       <option name="Sobre-Natural" value="Sobre-Natural">Sobre Natural</option>
                       <option name="Historia" value="Historia">Historia</option>
                       <option name="Comedia" value="Comedia">Comedia</option>
                       <option name="Shounen" value="Shounen">Shounen</option>
                       <option name="Aventura" value="Aventura">Aventura</option>
                       <option name="Ecchi" value="Ecchi">Ecchi</option>
                   </select>
               </div>
               <div>
                   <label>Studio Animacion</label>
                   <input id="inputStudio" type="text" name="studios" value={studios} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Tipo</label>
                   <input id="inputTemporadas" type="text" name="temporadas" value={temporadas} onChange={handleChanged} />
               </div>
               <div>
                   <label>Imagen</label>
                   <input className='img-form' id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleFileChanged}/>
                    
               </div>
               <div>
                   <button className='btn-enviar' id="btnRegistro" type='submit'>Enviar</button> 
               </div>
           </form>
           </div>
        </div>
    )
}
