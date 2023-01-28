import './BrandBox.css'
import Button from '../Button/Button';

//This component is the box itself that is passed to Boxes.js to render the two brands next to each other
function BrandBox(props){

//Text to pass to button
let buttonText = 'Discover'

    return(
        <div className={props.logoImage}>
            <img src={props.brandImage} />
            <p className='box-text'>{props.brandText}</p>
            <Button innerText={buttonText} boxId={props.boxId} buttonId={props.boxId}/>
        </div>
    )
}

export default BrandBox;