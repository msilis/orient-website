import './WatchBanner.css';
import watchBannerImageOne from '../../Images/original--DyvuI7.png';
import Button from '../Button/Button';

function WatchBanner(){

    let buttonText = 'See details';

    return(
        <div className="watch-banner-container">
            <img src={watchBannerImageOne} className="banner-image"/>
            <div id='banner-text'>
                <h3 id='heading-orient-star'>Orient Star Contemporary, New Skeleton</h3>
                <p id='text-orient-star'>Its modern and stylish design includes sophisticated details, and the hand-wound skeleton movement symbolises the vastness of the universe. </p>
            <Button innerText={buttonText} id="info-button"/>
            </div>
            
        </div>
    )
}

export default WatchBanner;