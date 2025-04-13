"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, Edit } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Badge } from "../components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog"

const promotions = [
  {
    id: 1,
    code: "SUMMER24",
    type: "Percentage",
    value: "20%",
    validUntil: "2025-02-28",
    usage: "120 uses",
    status: "Active",
  },
  {
    id: 2,
    code: "WINTER24",
    type: "Percentage",
    value: "30%",
    validUntil: "2025-03-15",
    usage: "150 uses",
    status: "Inactive",
  },
  {
    id: 3,
    code: "FALL24",
    type: "Fixed",
    value: "$10",
    validUntil: "2025-05-01",
    usage: "200 uses",
    status: "Active",
  },
  {
    id: 4,
    code: "SPRING24",
    type: "BOGO",
    value: "Free Item",
    validUntil: "2025-06-10",
    usage: "300 uses",
    status: "Inactive",
  },
]

export default function LoyaltyPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [promoType, setPromoType] = useState("percentage")

  return (
    <div className="w-full bg-[#f7f7f7]">
      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#1c1c1c]">
            Loyalty and Promotions
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative w-full sm:w-auto">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                placeholder="Search Here..."
                className="pl-10 rounded-full w-full sm:w-[250px] text-xs sm:text-sm"
              />
            </div>
            <Button
              variant="outline"
              className="rounded-full border-gray-300 text-[#1c1c1c] text-xs sm:text-sm"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <Table className="min-w-[800px] text-xs sm:text-sm">
            <TableHeader>
              <TableRow className="bg-[#183957] text-white">
                <TableHead className="text-white text-xs sm:text-sm">Promo Code</TableHead>
                <TableHead className="text-white text-xs sm:text-sm">Type</TableHead>
                <TableHead className="text-white text-xs sm:text-sm">Value</TableHead>
                <TableHead className="text-white text-xs sm:text-sm">Valid Until</TableHead>
                <TableHead className="text-white text-xs sm:text-sm">Usage</TableHead>
                <TableHead className="text-white text-xs sm:text-sm">Status</TableHead>
                <TableHead className="text-white text-xs sm:text-sm">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promo) => (
                <TableRow key={promo.id} className="hover:bg-gray-50">
                  <TableCell className="text-xs sm:text-sm">{promo.code}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{promo.type}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{promo.value}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{promo.validUntil}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{promo.usage}</TableCell>
                  <TableCell className="text-xs sm:text-sm">
                    <Badge
                      variant={promo.status === "Active" ? "default" : "destructive"}
                      className={
                        promo.status === "Active"
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-red-500 text-white hover:bg-red-600"
                      }
                    >
                      {promo.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">
                    <Button variant="ghost" size="icon">
                      <Edit size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Create Promotion Form */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 text-xs sm:text-sm">
          <h2 className="text-xl font-bold mb-4 text-[#1c1c1c]">Create New Promotion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Promotion Type */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-xs sm:text-sm text-[#1c1c1c]">
                Promotion Type
              </label>
              <Select defaultValue="percentage">
                <SelectTrigger className="w-full text-xs sm:text-sm">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="text-xs sm:text-sm">
                  <SelectItem value="percentage">Percentage Discount</SelectItem>
                  <SelectItem value="fixed">Fixed Amount</SelectItem>
                  <SelectItem value="bogo">Buy One Get One</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Promo Code */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-xs sm:text-sm text-[#1c1c1c]">
                Promo Code
              </label>
              <Input placeholder="Enter promo code" className="text-xs sm:text-sm" />
            </div>

            {/* Discount Value */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-xs sm:text-sm text-[#1c1c1c]">
                Discount Value
              </label>
              <Input placeholder="Enter value" className="text-xs sm:text-sm" />
            </div>

            {/* Validity Period From */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-xs sm:text-sm text-[#1c1c1c]">
                Validity Period
              </label>
              <Input placeholder="YYYY-MM-DD" className="text-xs sm:text-sm" />
            </div>

            {/* Validity Period To */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-xs sm:text-sm text-[#1c1c1c]">
                To
              </label>
              <Input placeholder="YYYY-MM-DD" className="text-xs sm:text-sm" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-[#183957] hover:bg-[#142f4b] text-white rounded-md px-5 text-xs sm:text-sm">
              Save Promotion
            </Button>
            <Button variant="outline" className="border-gray-300 text-[#1c1c1c] text-xs sm:text-sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>

      {/* Optional: Dialog for Creating Promo in a Modal (if needed) */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Promotion</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promoType" className="text-right text-xs sm:text-sm">
                Type
              </label>
              <Select
                value={promoType}
                onValueChange={setPromoType}
                className="col-span-3 text-xs sm:text-sm"
              >
                <SelectTrigger id="promoType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="text-xs sm:text-sm">
                  <SelectItem value="percentage">Percentage</SelectItem>
                  <SelectItem value="fixed">Fixed Amount</SelectItem>
                  <SelectItem value="bogo">Buy One Get One</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#183957] hover:bg-[#142f4b] text-white text-xs sm:text-sm">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
