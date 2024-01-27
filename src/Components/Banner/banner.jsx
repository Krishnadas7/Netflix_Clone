import React,{useEffect,useState} from 'react';
import './banner.css'
import axios from '../../axios'
import { BsCaretRightFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {API_KEY,imageUrl } from '../../Constants/constant';
function Banner(){
   const [movie,setMovies]=useState()
    useEffect(()=>{
        let newRandomNumber=0
        const generateRandomNumber = () => {
             newRandomNumber = Math.floor(Math.random() * 20);
        }
        generateRandomNumber(); 
          axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
            setMovies(response.data.results[newRandomNumber])
          })
          
    },[])


    return(
        <>
        <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}>
            <div className='banner-container'>
                <div className='head-desc '>
                    <h1 className='text-white title'>{movie ? movie.title:""}</h1>
                    <p className='text-white description'>
                       {movie ? movie.overview: " " }
                        </p>
                
                <div className="buttons flex"  >
                    <button className='bg-white flex play-icon-button' ><BsCaretRightFill className='play-icon  '/><b> Play</b></button>
                    <button className=' details text-white  '>
                        <IoMdInformationCircleOutline className='more-icon'/>More</button>
                </div>
                </div>
            </div>
            <div className='fade-bottom'>

            </div>
        </div>
        
       
        
        </>
    )
}
export default Banner