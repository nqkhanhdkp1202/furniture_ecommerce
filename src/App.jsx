import { useRoutes } from "react-router-dom";
import { CartProvider, CartContext } from "./context/CartContext";
import router from "./config/Routes";
import { UserProvider } from "./context/UserContext";

function App() {
  const element = useRoutes(router);

  return (
    <UserProvider>
      <CartProvider>{element}</CartProvider>
    </UserProvider>
  );
}

export default App;
