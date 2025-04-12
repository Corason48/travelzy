import mstr from "@/assets/mstr.png"
import visa from "@/assets/viza.png"
import discover from "@/assets/disc.png"
import amex from "@/assets/amex.png"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { HelpCircle } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("mastercard")

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Credit Card Details</h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "mastercard" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("mastercard")}
            >
              <img src={mstr} alt="Mastercard"  className="h-8 w-20" />
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "visa" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("visa")}
            >
              <img src={visa} alt="Visa"  className="h-8 w-20" />
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "amex" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("amex")}
            >
              <img src={amex}alt="American Express"  className="h-8 w-20" />
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${paymentMethod === "discover" ? "border-blue-500" : ""}`}
              onClick={() => setPaymentMethod("discover")}
            >
              <img src={discover} alt="Discover" className="h-8 w-20" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Name on card</label>
          <Input placeholder="Meet Patel" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Card number</label>
          <Input placeholder="0000 0000 0000 0000" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Card expiration</label>
            <div className="grid grid-cols-2 gap-2">
              <Select defaultValue="month">
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month</SelectItem>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <SelectItem key={month} value={month.toString()}>
                      {month.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="year">
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">Year</SelectItem>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Card Security Code</label>
            <div className="relative">
              <Input placeholder="Code" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <HelpCircle size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-xl font-bold mb-4">Billing address</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Country</label>
              <Select defaultValue="country">
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="country">Country</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Address</label>
              <Input placeholder="Address" />
            </div>

            <div>
              <label className="block mb-2 font-medium">City</label>
              <Input placeholder="City" />
            </div>

            <div>
              <label className="block mb-2 font-medium">State</label>
              <Input placeholder="State" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-medium">ZIP CODE</label>
            <Input placeholder="ZIP CODE" />
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-xl font-bold mb-4">Contact information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <Input placeholder="Email" />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone</label>
              <Input placeholder="Phone" />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <Button className="w-full bg-[#1c1c1c] hover:bg-[#333] py-6">Pay</Button>
        </div>
      </div>
    </div>
  )
}
