import React from 'react';

const Newsletter = () => {
    const cancelEvent = e => {
        e.preventDefault();
    }

    return (
        <div className="newsletter">
            <p>Suscribete a nuestro newsletter para estar al tanto de las novedades que se integren al juego ante que nadie.</p>
            <form className="form" action="/">
                <label>Tu email:</label>
                <input type="text" name="email" placeholder="Ej. email@correo.com"/>
                <input onClick={cancelEvent} type="submit" value="Registrar"></input>
            </form>
        </div>
    );
}
 
export default Newsletter;