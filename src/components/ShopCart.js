import Nav from 'react-bootstrap/Nav';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopCart() {
    return(
        <Nav.Link href="#cart">
            <FontAwesomeIcon icon={faCartShopping} 
            color="rgb(133, 198, 98)"
            size="2x"  
          />
          </Nav.Link>
    );
}

export default ShopCart;