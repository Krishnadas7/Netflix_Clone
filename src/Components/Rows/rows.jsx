import './row.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constant';
import View from '../View/view';

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id,setMovieId]=useState('')
  const [movieData,setMovieData]=useState('')

  const setModalIsOpenToTrue = (id,movieData) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        console.log("video",response.data);
        setMovieId(response.data.results[0].key)
        setMovieData(movieData)
      })
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const customStyles = {
    content: {
      width: '768px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'black',
      borderRadius: '10px', 
      padding: '20px',
      border:'none'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: 'transparent',
      border: 'none',
    },
  };

  return (
    <>
      <div className='row-body flex'>
        <div className='rows m-2'>
          <p className='row-header text-white '>{props.title}</p>
          <div className='poster-images flex'>
            {movies.map((obj,index) => (
              <img key={index}
                onClick={()=>setModalIsOpenToTrue(obj.id,obj)}
                className='row-image'
                src={`${movies ? imageUrl + obj.backdrop_path : ''}`}
                alt=''
              />
            ))}
            <Modal isOpen={modalIsOpen} onRequestClose={setModalIsOpenToFalse} style={customStyles} ariaHideApp={false}>
              <button onClick={setModalIsOpenToFalse} style={customStyles.closeButton}>
                x
              </button>
              <View data={movieData} id={id} />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row;
