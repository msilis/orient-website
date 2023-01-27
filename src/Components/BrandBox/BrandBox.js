import './BrandBox.css'
import Button from '../Button/Button';

function BrandBox(props){

let buttonText = 'Discover'
    return(
        <div className={props.logoImage}>
            <img src={props.brandImage} />
            <p className='box-text'>{props.brandText}</p>
            <Button innerText={buttonText} boxId={props.boxId}/>
        </div>
    )
}

export default BrandBox;