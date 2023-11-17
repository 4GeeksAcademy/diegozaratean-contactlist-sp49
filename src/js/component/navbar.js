import React, {useContext} from "react";
import {Context} from '../store/appContext.js'
import { Link } from "react-router-dom";

export const Navbar = () => {
const {store} = useContext(Context)
return (
<nav className="navbar navbar-light bg-light mb-3">
    <Link to="/">
    <span className="navbar-brand mb-0 h1">React Boilerplate</span>
    </Link>
    <div className="ml-auto">
        {store.titulo}
        <Link to="/demo">
        <button className="btn btn-primary">1Check the Context in action</button>
        </Link>

    </div>
</nav>
);
};