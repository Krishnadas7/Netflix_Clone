import './footer.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

function Footer(){
    return(
        <>
        <div className="footer">
        <div className='flex icons-div'>
                        <GrFacebookOption className='fb-icon'/>
                        <FaInstagram className='insta-icon'/>
                        <FaTwitter className='twitter-icon'/>
                        <BsYoutube className='youtube-icon'/>
                        
                    </div>
            <div className='footer-items'>
                
                <div className="col1">
                    
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notices</li>
                        <li><button className='footer-button' >Service Code</button></li>
                        <li><span>&#169;</span>1997-2024 Netflic,Inc.</li>
                    </ul>
                </div>
                <div className="col1">
                   <ul>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                   </ul>
                </div>
                <div className="col1">
                   <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                   </ul>
                </div>
                <div className="col1">
                    <ul>
                        <li>Media Centre</li>
                        <li>Privacy</li>
                        <li>Contact US</li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    )
}
export default Footer