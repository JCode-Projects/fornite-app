import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ home }) => {
    return ( 
        <header className={`header-app ${home ? home : ''}`}>
            <div className="header-app__nav container">
                <Link to="/">
                    <h1><span>F</span>ornite</h1>
                </Link>
                <nav className="nav_main">
                    <Link to="/">Inicio</Link>
                    <Link to="/tienda">Tienda</Link>
                </nav>
            </div>
            <div className="container info-main">
                <h2>Conoce más sobre los últimos ítems agregados a <span>Fornite</span> en sus últimas actualizaciones.</h2>
            </div>
        </header>
    );
}
 
export default Header;