import useState from "react"
import { useQuery } from "react-query";

// Components
import { LinearProgress } from "@mui/material";
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
  const handleAddToCart = () => null
  const handleRemoveFromCart = () => null
  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>
  return (
    <div className="App">
      <h1>Hello tsx</h1>
    </div>
  );
}

export default App;
