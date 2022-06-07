import './App.css';
import OrderPage from "./pages/OrderPage"
import SummaryPage from "./pages/SummaryPage";
import CompletePage from "./pages/CompletePage";
import tailwind from './style/tailwind.css';
import { OrderContextProvider } from "./contexts/OrderContext";
import { useState } from 'react';

function App() {
const [step, setStep] = useState(0);

  return (
    <div className="App">
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
