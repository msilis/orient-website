import BrandBox from '../BrandBox/BrandBox';
import './Boxes.css'

function Boxes(){

    let orientStarText = 'On your wrist is the joy of timeless styling and the promise of tomorrow. ORIENT STAR answers your love of the authentic with a legacy of mechanical excellence.'
    let orientText = 'By combining Japanese craftsmanship with beautiful and reliable timepiece design, an ORIENT Watch is with you to mark every moving moment.'

    return(
        <div className='boxes-container'>
            <BrandBox logoImage={'orient-star-logo'} brandText={orientStarText} boxId={'star-brand'}/>
            <BrandBox logoImage={'orient-logo'} brandText={orientText} boxId={'orient-brand'}/>
        </div>
    )
}

export default Boxes;