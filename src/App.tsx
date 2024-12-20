import { useState } from "react"
import { useQuery } from "react-query";

// Components
import { LinearProgress } from "@mui/material";
import { Item } from "./components";
import Grid from "@mui/material/Grid"
import Drawer from "@mui/material/Drawer";
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Cart } from "./components"

// Styles
import { Wrapper, StyledButton } from "./App.styles";

// Types
export type cartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<cartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products/")).json()

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as cartItemType[])
  const { data, isLoading, error } = useQuery<cartItemType[]>("products", getProducts)
  const getTotalItems = (items: cartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0)
  const handleAddToCart = (clickedItem: cartItemType) => {
      setCartItems(prev => {
          const isItemInCart = prev.find(item => item.id === clickedItem.id)
          if(isItemInCart) {
              return prev.map(item => (
                  item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
              ))
          }
          return  [...prev,{...clickedItem, amount: 1}]
      })
  }
  const handleRemoveFromCart = () => (id: number) => {
      setCartItems(prev => (
          prev.reduce((ack, item) => {
              if(item.id === id) {
                  if(item.amount === 1) return ack
                  return [...ack, {...item, amount: item.amount - 1}]
              }else {
                  return [...ack,item]
              }
          }, [] as cartItemType[])
      ))
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>
  return (
    <Wrapper className="App">
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart addToCart={handleAddToCart} cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
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
