import React, { useContext} from "react";
import {Context} from '../store/appContext.js'
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

const {store, actions} = useContext(Context)

console.log('componente home , esto es demo:')
console.log(store)
console.log(store.demo)
actions.imprimirMensaje()
return(
<div className="text-center mt-5">
    <h1>Hello Rigo123we!</h1>
    <p>
        <img src={rigoImage} />
    </p>
    <a href="#" className="btn btn-success">
        If you see this green button, bootstrap is working
    </a>(
    <button onClick={()=>actions.cambiarTitulo()}>Cambia Titulo</button>
</div>
);
}