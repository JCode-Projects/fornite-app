import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Item = (props) => {
    const id = props.match.params.id;
    
    const [item, saveItem] = useState({
        item: {
            images: {
                icon: ""
            },
            name: "",
            type: "",
            rarity: "",
            cost: ""
        }
    });

    useEffect(() => {
        const getItem = async id => {
            const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
            const data = await response.json();
            saveItem(data.data);
        }

        getItem(id);
    }, [id]);

    return (  
        <div className="main-app">
            <Header />
            <div className="container info-item">
                <div className="image">
                    <img src={item.item.images.icon} alt={item.item.name} />
                    <div className="container-icon"></div>
                </div>
                <div className="info-container">
                    <h3>{item.item.name}</h3>
                    <p><span>Tipo: </span> {item.item.type}</p>
                    <p><span>Precio: </span> {item.item.cost} Pavos</p>
                    <p><span>Rareza: </span> {item.item.rarity}</p>
                    <Link className="btn-home" type="button" to="/tienda">Regresar a la tienda</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Item;