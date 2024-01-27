import './row.css'
import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../Constants/constant'

function Row(props){
    const [movies,setMovies]=useState([])

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    useEffect(()=>{
      axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results)
      })
    },[])
    return (
        <>
        <div className='row-body flex '>
          <div className='rows m-2'>
            <p className='row-header text-white '>{props.title}</p>
            <div className='poster-images flex'>
                {
                   movies.map((obj)=>(
                     <img onClick={setModalIsOpenToTrue} className='row-image' src={`${movies ? imageUrl+obj.backdrop_path:''}`} alt="" />
                    ))
                }
          </div>
          </div>
          
        </div>
        </>
    )
}
export default Row