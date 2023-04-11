import { cartItemType } from "../../App";
import { Wrapper } from "../CartItem/CartItem.styles";
import Button from "@mui/material/Button";

type Props = {
    item: cartItemType;
    addToCart: (clickedItem: cartItemType) => void
    removeFromCart: (id: number) => void
}

export const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className={"info"}>
                    <p>Price: ${item.price}</p>
                    <p>Total $({item.amount * item.price})</p>
                </div>
                <div className={"buttons"}>
                    <Button disableElevation size={"small"} variant={"contained"} onClick={() => removeFromCart(item.id)}>-</Button>
                    <p>{item.amount}</p>
                    <Button disableElevation size={"small"} variant={"contained"} onClick={() => addToCart(item)}>+</Button>
                </div>
            </div>
                <img src={item.image} alt={item.title} />
        </Wrapper>
    )
}
