import './Sitemap.css'

//This component is the sitemap at the bottom of the page. It would ordinarily have links but I have decided to forego that at this point in time.
function Sitemap(){
    return(
        <div className='sitemap-container'>
            <div id='orient-collection-list'>
            <h4>ORIENT Collection</h4>
            <ul>
                <li>Classic</li>
                <li>Contemporary</li>
                <li>Sports</li>
                <li>Revival</li>
            </ul>
            </div>
            <div id='orient-star-collection-list'>
                <h4>ORIENT STAR Collection</h4>
                <ul>
                    <li>Classic</li>
                    <li>Contemporary</li>
                    <li>Sports</li>
                </ul>
            </div>
            <div id='support-list'>
                <h4>Support</h4>
                <ul>
                    <li>Service Network</li>
                    <li>Terms of Guarantee</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div id='about-list'>
                <h4>About Us</h4>
                <ul>
                    <li>Our Story</li>
                    <li>Why Mechanical</li>
                    <li>Where to Buy</li>
                </ul>
            </div>
            <div id='country-list'>
                <h4>Country Selector</h4>
                <ul>
                    <li>Orient Globar</li>
                    <li>Orient Latin America</li>
                    <li>Orient Germany</li>
                    <li>Orient Spain</li>
                    <li>Orient Russia</li>
                    <li>Orient Hungary</li>
                    <li>Orient Romania</li>
                    <li>Orient Poland</li>
                </ul>
            </div>
        </div>
    )
}

export default Sitemap;