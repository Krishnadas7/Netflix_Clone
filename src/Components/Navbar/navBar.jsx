import './navbar.css'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar(){
    
    return(
        <>
        <div className='header-nav'>
        <div className=" nav-bar h-16">
            
            <img className=" w-13 mx-10 my-5 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <ul className='flex header-button-color '>
                    <li className='header-button' ><b> Home</b></li>
                    <li className='header-button'>TV Shows</li>
                    <li className='header-button'>Movies{}</li>
                    <li className='header-button'>News & Popular</li>
                    <li className='header-button'>My List</li>
                    <li className='header-button'>Browse by Languages</li>
                 
                </ul>
          <div className='flex mx-10'>
           <IoMdSearch className=' mx-1 search-icon  '/>
           <MdOutlineNotificationsNone className='nofication-icon mx-1'/>
           <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" className='h-6 mx-1 my-5' alt="" />
           <IoMdArrowDropdown className='arrow-icon' />
          </div>
         
        </div>
        </div>
        </>
    )
}
export default Navbar