import React from 'react'
import "./ToDo.css"

export default function ToDo({hoy, eliminarTarea}) {

  return (
    <ul className="todo">
        <h2 className="todo_title">Tareas De Hoy</h2>
        <ul className="todo_ul">
          {hoy.map((tarea)=>
          <>
            
            <li className='todo_item'>
              <input type="checkbox"/> 
              {tarea.tarea}
              <div className="close" onClick={()=> eliminarTarea()}>x</div>
            </li>
          </>
          )}
        </ul>
    </ul>   
  )
}
