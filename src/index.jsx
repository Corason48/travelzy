import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { PaymentProvider } from "./context/PaymentContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <PaymentProvider>
    <App />
    </PaymentProvider>
    
  </React.StrictMode>,
)
