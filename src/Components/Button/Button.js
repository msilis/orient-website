import './Button.css';

function Button(props) {
    return(
        <div className="button-container">
            <a href="#" className='button-template'>{props.innerText}</a>
        </div>
    )
}

export default Button;