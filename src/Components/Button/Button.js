import './Button.css';

function Button(props) {
    return(
        <div className="button-container" id={props.boxId}>
            <a href="#" className='button-template' >{props.innerText}</a>
        </div>
    )
}

export default Button;