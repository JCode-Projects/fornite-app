import React, { useState, useEffect } from 'react';
import Header from './Header';
import Info from './Info';
import Newsletter from './Newsletter';
import Items from './Items';
import Footer from './Footer';

const Inicio = () => {
    const [items, saveItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch('https://fortnite-api.theapinetwork.com/store/get');
            const allItems= await response.json();
            saveItems(allItems.data.slice(6, 12));
        }

        getItems();
    }, []);

    return (  
       <div className="main-app">
           <Header home="home" /> 
           <Info />
           <Newsletter />
           <Items items={items} />
           <Footer />
       </div>
    );
}
 
export default Inicio;