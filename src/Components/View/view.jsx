import React from 'react'
import YouTube from 'react-youtube';
import './view.css'
import { BsCaretRightFill } from "react-icons/bs";

function View(props){
  console.log('props',props);
  const opts = {
    height: '390',
    width: '100%',
    margin: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,         // Hide video controls
      modestbranding: 1,   // Hide YouTube logo
      showinfo: 0,         // Hide video title and uploader
      fs: 0,               // Disable fullscreen button
    },
  };
  
    return(
        <>
       <div style={{width:'768px',height:'500px' ,color:'white'}}>
         <YouTube className='frame-of-div' videoId={props.id} opts={opts}  />
         <div className='view-movie-details'>
          <div className='first-part'>
            <p><span className='text-green-700'>93 % match </span>&nbsp;{props.data.release_date}&nbsp; Parts <button className='details-button' >HD</button></p>
          {/* <h3 className='text-green-700'>&nbsp;2021&nbsp; Parts <button>HD</button></h3> */}
         <p><a href="">A</a>{props.data.original_language} </p>
         <p className='details-description'>{props.data.overview}</p>
       
          </div>
          <div className='second-part'>
            <p className='langdetails' ><span>cast</span>&nbsp;&nbsp;{props.data.original_language}</p>
            <p className='langdetails'><span>genres</span>&nbsp;&nbsp;{props.data.media_type}</p>
            <p className='langdetails'><span>this show is</span>&nbsp;&nbsp;suspense thriller movie</p>
           
          </div>
         </div>
        
       </div>
        </>
    )
}
export default View