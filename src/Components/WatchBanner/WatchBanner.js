import './WatchBanner.css';
import Button from '../Button/Button';

//This component would be the carousel part of the website that cycles through different ads. I have not made the carousel, just the first image is shown.
function WatchBanner(props){


    return(
        <div className="watch-banner-container">
            <img src={props.bannerImage} className="banner-image"/>
            <div id='banner-text'>
                <h3 id={props.bannerId}>{props.bannerText}</h3>
                <p id={props.bannerPId}>{props.bannerPText}</p>
            <Button innerText={props.buttonText} buttonId={props.buttonId}/>
            </div>
            
        </div>
    )
}

export default WatchBanner;