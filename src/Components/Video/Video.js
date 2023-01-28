import videoPic from '../../Images/original--tBRxxt.png';
import './Video.css';

//This component would contain the video if I had it. At present it is just the thumbnail of the video.
function Video(){
    return(
        <div className="video-container">
            <img src={videoPic} id="video-thumbnail"/>
            <h3 id='video-text-overlay'>ORIENT STAR brand movie</h3>
        </div>
    )
}

export default Video;