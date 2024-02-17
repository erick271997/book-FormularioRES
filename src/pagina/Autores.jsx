import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Componente/Footer';
import Header from '../Componente/Header';
import { Link } from 'react-router-dom';

function Autores() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/search.json?author=tolkien');
        setAutores(response.data.docs);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAutores();
  }, []);

  return (
    <>
      <Header />
      <h1 className='h1-autores'>Autores</h1>
      <div className='autores-container'>
        {autores.map((autor, index) => (
          <div key={index} className='autor-div'>
            <h2 className='autor-name'>{autor.author_name}</h2>
           
            <figure>
 <a href='https://en.wikipedia.org/wiki/J._R._R._Tolkien'>
           <img className='img-tolkie' src={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/jrr-tolkien-stephen-humphries.jpg'} alt= ''/>
            
</a>
            </figure>
            
         <h2 className='autor-language'>{autor.language}</h2>
     <p className='autor-version'> {autor.publisher}</p>
            
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Autores;
