import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data/db.json'
import '../components/Item.css'

const Item = () => {
  const { cliente }  = useParams();
  const resultado = data.find( item => item.cliente === cliente );
  return (
    <div className='item__container'>
      <h1 className='title'>Nombre de cliente: {resultado.cliente}</h1>
      <video className='video__' controls>
      <source src={`${resultado.linkVideo}`} type="video/mp4"></source>
      </video>
      <h3 className='title'>Transcripcion</h3>
      <div className='transcripcion__container'  dangerouslySetInnerHTML={{__html: resultado.transcripcion}}/>
      <h3 className='title'>Tareas</h3>
      <h3 className='escenario__title'>Escenario: {resultado.escenario}</h3>
      <div className='preguntas__container'>
        <ul>
        {resultado.preguntas.map((item, index) => 
                <div className='task__list'>
                <><p>Tarea {index+1}:</p><li>{item.texto}</li><p className='task__'>Duracion de la tarea: {item.tiempo} </p></>
                </div>
        )}
        </ul></div>

        <Link to='/'><h3>Volver atras</h3></Link>
    </div>
  )
}

export default Item