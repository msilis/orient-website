import './menu.css';
import logoImage from '../../Images/original--c0jxu6.png'
import MenuItems from './menuItems';


function Menu(){
    return(
        <div className="top-menu-div">
            <img src={logoImage} alt="orient star and orient logo" id='orient-logo' height={'48'} width={'150'}/>
            <MenuItems />
        </div>
    )
}

export default Menu;