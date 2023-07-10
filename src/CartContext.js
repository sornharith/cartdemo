import { createContext, useState } from "react";
import { productsArray, getproductData } from "./productStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}){

    const [cartProducts, setcartProducts] = useState([]);
    // [{ id: 1 quantity: 2}] { the cart product is store in the list and store the product}

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) return 0;

        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);   

        if (quantity === 0){
            setcartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setcartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1}
                    : product                                       // it false -> add that item to the array
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);   

        if (quantity == 1 ){
            deleteFromCart(id);
        } else {
            setcartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1}
                    : product                                       // it false -> add that item to the array
                )
            )
        }
    }

    function deleteFromCart(id){
        setcartProducts(
            cartProducts => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getproductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
    
