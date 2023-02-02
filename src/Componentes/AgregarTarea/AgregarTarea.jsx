import React,{useState} from 'react'
import "./AgregarTarea.css"

export default function AgregarTarea({dias,setDias}) {

const [input, setInput] = useState("")

const [lunesCheck, setLunesCheck] = useState(false)
const [martesCheck, setMartesCheck] = useState(false)
const [miercolesCheck, setMiercolesCheck] = useState(false)
const [juevesCheck, setJuevesCheck] = useState(false)
const [viernesCheck, setViernesCheck] = useState(false)
const [sabadoCheck, setSabadoCheck] = useState(false)
const [domingoCheck, setDomingoCheck] = useState(false)

const handleAddTask = (input) => {
    let diasNuevo = dias
    if(lunesCheck){diasNuevo.lunes.push({tarea:input})}
    if(martesCheck){diasNuevo.martes.push({tarea:input})}
    if(miercolesCheck){diasNuevo.miercoles.push({tarea:input})}
    if(juevesCheck){diasNuevo.jueves.push({tarea:input})}
    setDias(diasNuevo)
    if(viernesCheck){diasNuevo.viernes.push({tarea:input})}
    setInput("")
    if(sabadoCheck){diasNuevo.sabado.push({tarea:input})}
    if(domingoCheck){diasNuevo.domingo.push({tarea:input})}
}

  return (
    <div className="add">
        <div className="add-container">
            <h3>Agregar Tarea</h3>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>handleAddTask(input)}>Agregar</button>
            <div className="check-dias">
                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="lunes" 
                        onChange={()=> setLunesCheck(!lunesCheck)}/> 
                    <label htmlFor='lunes'>Lunes</label>
                </div>

                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="martes" 
                        onChange={()=> setMartesCheck(!martesCheck)}/> 
                    <label htmlFor='martes'>Martes</label>
                </div>

                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="miercoles"
                        onChange={()=> setMiercolesCheck(!miercolesCheck)}/> 
                    <label htmlFor='miercoles'>Miercoles</label>
                </div>

                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="jueves" 
                        onChange={()=> setJuevesCheck(!juevesCheck)}/> 
                    <label htmlFor='jueves'>Jueves</label>
                </div>

                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="viernes" 
                        onChange={()=> setViernesCheck(!viernesCheck)}/> 
                    <label htmlFor='viernes'>Viernes</label>
                </div>

                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="sabado" 
                        onChange={()=> setSabadoCheck(!sabadoCheck)}/> 
                    <label htmlFor='sabado'>Sabado</label>
                </div>

                <div className="check-dia">
                    <input 
                        type="checkbox" 
                        id="domingo" 
                        onChange={()=> setDomingoCheck(!domingoCheck)}/> 
                    <label htmlFor='domingo'>Domingo</label>
                </div>
            </div>
        </div>
    </div>
  )
}
