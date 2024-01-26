import './App.css'
import Banner from './Components/Banner/banner'
import Footer from './Components/Footer/footer'
import Navbar from './Components/Navbar/navbar'
import Row from './Components/Rows/rows'

import {API_KEY,baseURL} from './Constants/constant'


function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <Row title="Trending Now" url={`trending/all/week?api_key=${API_KEY}&language=en-US`} />
     <Row title='Originals'  url={`discover/tv?api_key=${API_KEY}&with_networks=213`}/>
     <Row title='Comedy Movies' url={`discover/movie?api_key=${API_KEY}&with_genres=35`}/>
     <Row title='Horror Movies' url={`discover/movie?api_key=${API_KEY}&with_genres=27`}/>
     <Row title='Romance Movies' url={`discover/movie?api_key=${API_KEY}&with_genres=10749`}/>
     <Row title='Documentaries' url={`discover/movie?api_key=${API_KEY}&with_genres=99`}/>
     <Footer/>
    </>
  )
}

export default App
