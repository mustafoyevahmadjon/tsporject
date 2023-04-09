import { Wrapper } from "./item.styles";
import { cartItemType } from "../../App";
import Button from "@mui/material/Button"

type Props = {
    item: cartItemType,
    handleAddToCart: (clickedItem: cartItemType) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add To cart</Button>
        </Wrapper>
    )
}
export default Item 