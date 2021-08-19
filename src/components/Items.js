import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ items }) => {
    return (  
        <div className="summary-shop container">
            <h2>Tienda de Articulos</h2>
            <div className="all-elements">
            {items.map( (item) => (
                <div key={item.itemId} className="element">
                    <div className="icon-container">
                        <img src={item.item.images.icon} alt={item.item.name} />
                        <div className="path"></div>
                    </div>
                    <div className="info-container">
                        <h3>{item.item.name}</h3>
                        <p><span>Tipo: </span> {item.item.type}</p>
                        <p><span>Precio: </span> {item.store.cost} Pavos</p>
                        <p><span>Rareza: </span> {item.item.rarity}</p>
                    </div>
                    <div className="link-to">
                        <Link to={`/item/${item.itemId}`}>Más Información</Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
 
export default Items;