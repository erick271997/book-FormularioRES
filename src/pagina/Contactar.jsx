import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Componente/Footer';
import Header from '../Componente/Header';

function Contactar() {

  return (
    <>
      <Header />
      <div className="container-formu">
        <h2 className='h2-for'>Formulario de Contacto</h2>
        <form id="contact-form" action="submit.php" method="POST">
          <div className="form-group">
            <label  htmlFor="nombre">Nombre:</label>
            <input placeholder='erick' type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input placeholder='campaz' type="text" id="apellido" name="apellido" required />
          </div>
          <div className="form-group">
            <label htmlFor="pais">País:</label>
            <input placeholder='colombia' type="text" id="pais" name="pais" required />
          </div>
          <div className="form-group">
            <label htmlFor="ciudad">Ciudad:</label>
            <input placeholder='cali' type="text" id="ciudad" name="ciudad" required />
          </div>
          <div className="form-group">
            <label htmlFor="departamento">Departamento:</label>
            <input placeholder='valle del cauca' type="text" id="departamento" name="departamento" />
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Dirección:</label>
            <input placeholder='calle 1 57b68 cascajal' type="text" id="direccion" name="direccion" />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input placeholder='+57 3042003246' type="tel" id="telefono" name="telefono" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input placeholder='erickcampaqz@gmail.com' type="email" id="email" name="email" required />
          </div>
          <button type="submit">
            <Link className="button-link" to="/">Enviar</Link> 
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contactar;
