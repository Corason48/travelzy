"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, Edit } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Badge } from "../components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog"

// Sample data
const promotions = [
  {
    id: 1,
    code: "SUMMER24",
    type: "Percentage",
    value: "20%",
    validUntil: "30-02-2024",
    usage: "120 uses",
    status: "Active",
  },
  {
    id: 2,
    code: "SUMMER24",
    type: "Percentage",
    value: "30%",
    validUntil: "30-02-2024",
    usage: "120 uses",
    status: "Inactive",
  },
  {
    id: 3,
    code: "SUMMER24",
    type: "Percentage",
    value: "30%",
    validUntil: "30-02-2024",
    usage: "120 uses",
    status: "Active",
  },
  {
    id: 4,
    code: "SUMMER24",
    type: "Percentage",
    value: "20%",
    validUntil: "30-02-2024",
    usage: "120 uses",
    status: "Inactive",
  },
]

export default function LoyaltyPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [promoType, setPromoType] = useState("percentage")

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Loyalty and promotions</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search Here..." className="pl-10 w-[250px] rounded-full" />
          </div>
          <Button variant="outline" className="rounded-full">
            <SlidersHorizontal size={18} className="mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#172432] text-white">Promo Code</TableHead>
              <TableHead className="bg-[#172432] text-white">Type</TableHead>
              <TableHead className="bg-[#172432] text-white">Value</TableHead>
              <TableHead className="bg-[#172432] text-white">Valid Until</TableHead>
              <TableHead className="bg-[#172432] text-white">Usage</TableHead>
              <TableHead className="bg-[#172432] text-white">Status</TableHead>
              <TableHead className="bg-[#172432] text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {promotions.map((promo) => (
              <TableRow key={promo.id} className="border-b">
                <TableCell>{promo.code}</TableCell>
                <TableCell>{promo.type}</TableCell>
                <TableCell>{promo.value}</TableCell>
                <TableCell>{promo.validUntil}</TableCell>
                <TableCell>{promo.usage}</TableCell>
                <TableCell>
                  <Badge
                    variant={promo.status === "Active" ? "default" : "destructive"}
                    className={
                      promo.status === "Active" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                    }
                  >
                    {promo.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Edit size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Create New Promotion</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Promotion Type</label>
            <Select defaultValue="percentage">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percentage">Precentage Discount</SelectItem>
                <SelectItem value="fixed">Fixed Amount</SelectItem>
                <SelectItem value="bogo">Buy One Get One</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Promo Code</label>
            <Input placeholder="Enter promo code" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Discount Value</label>
            <Input placeholder="Enter Value" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Validity Period</label>
            <Input placeholder="mm/dd/yyyy" />
          </div>

          <div>
            <label className="block mb-2 font-medium">To</label>
            <Input placeholder="mm/dd/yyyy" />
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Button className="bg-[#172432] hover:bg-[#333]">Save Promotion</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Promotion</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promoType" className="text-right">
                Type
              </label>
              <Select value={promoType} onValueChange={setPromoType} className="col-span-3">
                <SelectTrigger id="promoType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">Percentage</SelectItem>
                  <SelectItem value="fixed">Fixed Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
