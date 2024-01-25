import './navbar.css'

function Navbar(){
    return(
        <>
        <div className=" flex justify-between content-between nav-bar bg-black h-16">
            
            <img className=" w-13 mx-10 my-4 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <img className="  w-10 h-10 " src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        </div>
        </>
    )
}
export default Navbar