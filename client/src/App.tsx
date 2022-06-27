import React from "react";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";
import CompletePage from "./pages/CompletePage";
import "./style/tailwind.css";
import "./style/font.css";
import { OrderContextProvider } from "./contexts/OrderContext";
import { useState } from "react";

function App() {
    const [step, setStep] = useState(0);

    return (
        <div className="App">
            <div className="bg-pink-100 font-pretendard">
                <OrderContextProvider>
                    {step === 0 && <OrderPage setStep={setStep} />}
                    {step === 1 && <SummaryPage setStep={setStep} />}
                    {step === 2 && <CompletePage setStep={setStep} />}
                </OrderContextProvider>
            </div>
        </div>
    );
}

export default App;
