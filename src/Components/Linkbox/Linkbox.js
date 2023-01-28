import Button from '../Button/Button';
import './Linkbox.css';


function Linkbox(){

    //Text for buttons
    let distributorText = 'FIND A DISTRIBUTOR';
    let serviceText = 'FIND A SERVICE NETWORK';
    let serviceButtonId = 'service-button';
    let distButtonId = 'dist-button';

    return(
        <div className='linkbox-main-contaner'>
            <div id='linkbox-container'>
            <div className='distributors'>
                <h4>Distributors</h4>
                <p className="linkbox-text">ORIENT and ORIENT STAR watches are sold through authorized distributors around the world. Find a distributor in your region.</p>
                <Button innerText={distributorText} buttonId={distButtonId}/>
            </div>
            <div className='service-network'>
                <h4>Service Networks</h4>
                <p className="linkbox-text">Find a local service network in your region.</p>
                <Button innerText={serviceText} buttonId={serviceButtonId}/>
            </div>
            </div>
        </div>
    )
}

export default Linkbox;