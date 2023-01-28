import Button from "../Button/Button";
import './RepairBanner.css'

//This component is the little banner announcing the free repair
function RepairBanner(){

    let buttonText = 'See Details';

    return(
        <div className="repair-banner-container">
            <h3>[Notice] Free repair of ORIENT STAR Diver Watch (AU03)</h3>
            <Button innerText={buttonText} />

        </div>
    )
}

export default RepairBanner;