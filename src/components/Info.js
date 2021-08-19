import React from 'react';

const Info = () => {
    return (
        <section className="container info_main">
            <h2>Sobre el Juego</h2>
            <div className="info_main_layout">
                <div className="image">
                    <img src="img/nosotros.jpg" alt="Conoce sobre nosotros." />
                </div>
                <div className="content">
                    <h3>El mejor battle royale</h3>
                    <p>Fortnite es un mundo de experiencias múltiples. Dejaos caer en la isla y competid hasta ser los últimos jugadores (o equipos) que queden en pie. Quedad con vuestros amigos para asistir a un concierto o ver una película. Cread un mundo propio con vuestras propias reglas. O eliminad hordas de monstruos con otros jugadores para salvar el mundo.</p>
                    <p>Disponible para consolas, PC y dispositivos móviles. ¡Battle Royale de Fortnite es gratis! Bajaos del autobús de batalla, dejaos caer sobre la isla y combatid hasta que no quede nadie más en pie. También podéis formar equipo con vuestros amigos u otros jugadores para sobrevivir a vuestros oponentes. Usad la madera, el ladrillo y el metal como materiales para construir estructuras que os ayuden a sobrevivir.</p>
                </div>
            </div>
        </section>
    );
}
 
export default Info;