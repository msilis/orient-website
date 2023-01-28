import './Button.css';


//This button takes props from the various components that use it and sets the style based on those props
function Button(props) {
    return(
        <div className="button-container" id={props.buttonId}>
            <a href="#" className='button-template' >{props.innerText}</a>
        </div>
    )
}

export default Button;