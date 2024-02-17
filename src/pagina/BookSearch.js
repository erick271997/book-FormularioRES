import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Componente/Header';
import Footer from '../Componente/Footer';
import imgleer from '../Img/leer.png'


const BookSearch = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/search.json?title=the+lord+of+the+rings');
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Header /> 
      <h1 className='h1-book '>Book List</h1>  

      <div className='container-book'>
       
        {books.map((book, index) => (
          <div key={index} className='book'>
           
            <h2 className='title'>{book.title}</h2>
            <p className='author'>by {book.author_name}</p>
            <img className='imgsleer' src= {imgleer} alt="Imagen de la portada del libro"/>
          <a className='informa' href='https://openlibrary.org/'> Mas Información </a>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default BookSearch;
