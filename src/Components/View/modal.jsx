import React from 'react'
import YouTube from 'react-youtube';
import './modal.css'

function Modal(){
    
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return(
        <>
       <div style={{width:'500px',height:'500px'}}>
        {/* <iframe className='frame-of-div' src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe> */}
         <YouTube videoId="2g811Eo7K8U" opts={opts}  />;
       </div>
        </>
    )
}
export default Modal