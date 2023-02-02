import React,{useState} from 'react'
import "./Dia.css"

export default function Dia({dia, tareas}) {

    const [open, setOpen] = useState(false)


  return (
    <li className="dia" style={open ? {height:"auto"} : {height:"45px"}}>
        <h3 className="dia_title" onClick={()=> setOpen(!open)}>{dia}</h3>
        <ul className="dia_tareas">
          {tareas.map((tarea) => <li className='dia_tarea'> {tarea.tarea} </li>)}
        </ul>
    </li>
  )
}
