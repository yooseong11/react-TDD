import './App.css';
import OrderPage from "./pages/OrderPage"
import tailwind from './style/tailwind.css';
import { OrderContextProvider } from "./contexts/OrderContext";

function App() {

  return (
    <div className="App">
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
}

export default App;
