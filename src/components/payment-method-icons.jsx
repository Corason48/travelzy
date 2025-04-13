import { useState } from "react"
import mstr from '@/assets/mstr.png'
import viza from '@/assets/viza.png'
import amex from '@/assets/amex.png'
import disc from '@/assets/disc.png'
import { Button } from "./ui/button"
export default function PaymentMethodIcons() {
  const [paymentMethod, setPaymentMethod] = useState("mastercard")
  return (
    <div className="border border-dashed border-gray-300 rounded-md p-4">
      <div className="text-sm font-medium mb-2">Payment Method</div>
      <div className="flex items-center justify-between md:justify-start md:space-x-8 h-14">
      <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "mastercard" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("mastercard")}
            >
              <img src={mstr} alt="Mastercard" className="h-8 w-20" />
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "visa" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("visa")}
            >
              <img src={viza} alt="Visa" className="h-8 w-20" />
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "amex" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("amex")}
            >
              <img src={amex} alt="American Express" className="h-8 w-20" />
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "discover" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("discover")}
            >
              <img src={disc} alt="Discover" className="h-8 w-20" />
            </Button>
      </div>
    </div>
  )
}
