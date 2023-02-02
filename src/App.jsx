import React,{useState} from 'react';
import './App.css';
import 'normalize.css';
import Dia from './Componentes/Semana/Dia.jsx';
import ToDo from './Componentes/ToDo/ToDo';
import AgregarTarea from './Componentes/AgregarTarea/AgregarTarea';


function App() {

  const [menu, setMenu] = useState(true)

  const [mostrarAgregarTarea, setMostrarAgregarTarea] = useState(false)

  const [dias, setDias] = useState(
    {
      lunes: [
        {tarea:"estudiar ingles",
          completado: false,
          eliminar: false 
        },
        {tarea:"comer",
        completado: false,
        eliminar: false}
      ],
      martes:[
        {tarea:"estudiar React"},
        {tarea:"entrenar"}
      ],
      miercoles: [
        {tarea:"estudiar javascript"},
        {tarea:"comer"}
      ],
      jueves: [
        {tarea:"correr"},
        {tarea:"ir a comprar"}
      ],
      viernes: [
        {tarea:"hacer proyecto"},
        {tarea:"leer"}
      ],
      sabado: [
        {tarea:"descanso"},
        {tarea:"descanso"}
      ],
      domingo: [
        {tarea:"cocinar"},
        {tarea:"comer"}
      ],

    }
  )

  const eliminarTarea = ()=>{
    alert("Tarea Borrada")
    let newDias = dias
    newDias.lunes.splice(1,1)
    setDias(newDias)
    
  }
  

  return (
    <div className="App">
      <header className="header padding">
        <h1 className="title">MyPlanning</h1>
      </header>

      <div className="container padding">
        {
          menu ?
          <ul className="semana">
            <h2 className="semana_title">Semana</h2>
            <Dia dia={"Lunes"} tareas={dias.lunes}/>
            <Dia dia={"Martes"} tareas={dias.martes}/>
            <Dia dia={"Miercoles"} tareas={dias.miercoles}/>
            <Dia dia={"jueves"} tareas={dias.jueves}/>
            <Dia dia={"viernes"} tareas={dias.viernes}/>
            <Dia dia={"sabado"} tareas={dias.sabado}/>
            <Dia dia={"Domingo"} tareas={dias.domingo}/>
          </ul>
          :

          <>
          <ToDo hoy={dias.lunes} eliminarTarea={eliminarTarea}/>
          <div className={mostrarAgregarTarea ? "agregar agregar-active" : "agregar"} onClick={()=> setMostrarAgregarTarea(!mostrarAgregarTarea)}>+</div>
          {mostrarAgregarTarea ? <AgregarTarea dias={dias} setDias={setDias}/> : null}
          </>
        }
      </div>

      <div className="menu">
        <ul className="menu_ul">
          <li className="menu_item" onClick={()=>setMenu(true)}>Semana</li>
          <li className="menu_item" onClick={()=>setMenu(false)}>Tareas</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
