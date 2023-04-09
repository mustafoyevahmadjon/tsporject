import { useState } from "react"
import { useQuery } from "react-query";

// Components
import { LinearProgress } from "@mui/material";
import { Item } from "./components/Item";
import Grid from "@mui/material/Grid"
import Drawer from "@mui/material/Drawer";
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Styles
import { Wrapper, StyledButton } from "./App.styles";

// Types
export type cartItemType = {
  id: number
  category: string
  title: string
  description: string
  image: string
  price: number
}

const getProducts = async (): Promise<cartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products/")).json()

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as cartItemType[])
  const { data, isLoading, error } = useQuery<cartItemType[]>("products", getProducts)
  const getTotalItems = (items: cartItemType[]) => null
  const handleAddToCart = (clickedItem: cartItemType) => null
  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>
  return (
    <Wrapper className="App">
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        Cart Goes Here
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
