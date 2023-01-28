import './menuItems.css';
import searchIcon from '../../Images/search-13-16.png';

//This component makes up the actual parts of the menu that get passed to the navbar. I did not add in the hover functionality to expand the menu on mouseover.
function MenuItems(){
    return(
        <div className="menu-item-container">
        <div className="menu-item">
            <a href="#">Orient Star</a>
        </div>
        <div className='placeholder'>
            <p>|</p>
        </div>
        <div className="menu-item">
            <a href='#'>Orient</a>
        </div>
        <div className='placeholder'>
            <p>|</p>
        </div>
        <div className='menu-item'>
            <a href='#'>News</a>
        </div>
        <div className='placeholder'>
            <p>|</p>
        </div>
        <div className='menu-item'>
            <a href='#'>Support</a>
        </div>
        <div className='placeholder'>
            <p>|</p>
        </div>
        <div className='menu-item'>
            <a href='#'>Where to buy</a>
        </div>
        <div className='menu-item search-text'>
            <a href='#'>Search<img src={searchIcon} id='search-icon'/></a>
        </div>
        </div>

    )
}

export default MenuItems;