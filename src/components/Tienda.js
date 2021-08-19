import React, { useState, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import Items from './Items';

const Tienda = () => {
    const [items, saveItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch('https://fortnite-api.theapinetwork.com/store/get');
            const allItems= await response.json();
            saveItems(allItems.data);
        }

        getItems();
    }, []);

    return (
        <div className="main-app">
            <Header />
            <Items items={items} />
            <Footer />
        </div>
    );
}
 
export default Tienda;