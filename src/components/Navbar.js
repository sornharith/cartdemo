import { Button, Container, Navbar , Modal } from "react-bootstrap";
import { useState , useContext} from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
const NavbarComponents = () => {
    const cart = useContext(CartContext);
    
    const [show , setshow] = useState(false);
    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart: {productCount} Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}> {/* part for popup the cart page*/}
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productCount > 0 ?
                    <>
                        <p>Items in ypur cart:</p>
                        {cart.items.map((currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
                        ))}

                        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                        <Button variant="success">
                            Purchase items!
                        </Button>
                    </>
                    :
                        <h1>This is the modal body</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )

};

export default NavbarComponents;