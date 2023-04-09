import useState from "react"
import { useQuery } from "react-query";

// Components
import { LinearProgress } from "@mui/material";
import { Item } from "./components/Item";
import Grid from "@mui/material/Grid"

// Styles
import { Wrapper } from "./App.styles";

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
  const { data, isLoading, error } = useQuery<cartItemType[]>("products", getProducts)
  const getTotalItems = () => null
  const handleAddToCart = (clickedItem: cartItemType) => null
  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>
  return (
    <Wrapper className="App">
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
