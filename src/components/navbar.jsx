import { NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

function Navbar() {
    const navLinksStyle = ({ isActive }) => {
        return {
            color: isActive ? '#F05941' : '',
            textDecoration: isActive ? 'underline' : '',
         }
    }
    return(
        <div>

                <ul className="navbar"> 
                    <li> <NavLink to="/"> <h1 className="logo"> ΌMΟRFΟ  </h1> </NavLink> </li>
                    <li> <NavLink style={navLinksStyle} to="/tops"> Tops </NavLink> </li>
                    <li> <NavLink style={navLinksStyle} to="/dresses"> Dresses </NavLink> </li>
                    <li> <NavLink className="shoppingBagIcon" style={navLinksStyle} to="/cart"> <AiOutlineShopping size={32} /> </NavLink> </li>
                </ul> 
        
        </div>
    )
};

export default Navbar