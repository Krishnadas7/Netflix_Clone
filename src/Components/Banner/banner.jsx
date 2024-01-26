import './banner.css'
import { BsCaretRightFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
function Banner(){
    return(
        <>
        <div className="banner">
            <div className='head-desc '>
            <h2 className='text-white title'>Title</h2>
            <p className='text-white description'><b>
                 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form o</b>
                 </p>
            </div>
            <div className="buttons flex" >
                <button className='bg-white flex play-icon-button' ><BsCaretRightFill className='play-icon  '/><b> play</b></button>
                <button className=' details text-white flex '>
                    <IoMdInformationCircleOutline className='text-white w-10 m-2 h-6'/><b>pause</b> </button>
            </div>
        </div>
        
        </>
    )
}
export default Banner