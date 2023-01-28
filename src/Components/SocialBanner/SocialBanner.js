import './SocialBanner.css'
import socialPic from '../../Images/social_bg.jpg';
import instaPic from '../../Images/instagram_logo.png';
import borderPic from '../../Images/border_gradient.png';

//This is the component that invites you to follow Orient on Instagram near the bottom of the page.
function SocialBanner() {
    return(
        <div className='social-container'>
                <div className='pic-container'>
               <img src={socialPic} id='social-pic' />
               
               </div>
               <div id='social-text'>
                <p>Stay connected with Orient</p>
               </div>
               <div id='border-container'>
               <img src={borderPic} id='border-pic' /> 
               </div>
               <div id='insta-container'>
               <img src={instaPic} id="insta-pic" />  
               </div> 
        </div>
    )
}

export default SocialBanner;