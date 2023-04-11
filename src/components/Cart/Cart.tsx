import { CartItem } from "../CartItem/CartItem"
import { Wrapper } from "./Cart.styles"
import { cartItemType } from "../../App"

type Props = {
    cartItems: cartItemType[];
    addToCart: (clickedItem: cartItemType) => void
    removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <h2>Your Shooping Cart</h2>
            {cartItems.length === 0 ? <p>No Items in your cart</p> : null}
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}  />
            ))}
        </Wrapper>
    )
}

export default Cart