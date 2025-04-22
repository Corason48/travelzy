"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Link } from "react-router-dom"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { Label } from "../components/ui/label"
import { useToast } from "../hooks/use-toast"

// Sample data for the client list with different fidelity statuses
const clientsData = [
  { id: "Client 1", name: "Row item 2", totalReservations: 45, lastReservation: "Row item 4", status: "Gold" },
  { id: "Client 2", name: "Row item 2", totalReservations: 30, lastReservation: "Row item 4", status: "Silver" },
  { id: "Client 3", name: "Row item 2", totalReservations: 29, lastReservation: "Row item 4", status: "Bronze" },
  { id: "Client 4", name: "Row item 2", totalReservations: 16, lastReservation: "Row item 4", status: "Standard" },
  { id: "Client 5", name: "Row item 2", totalReservations: 7, lastReservation: "Row item 4", status: "Gold" },
  { id: "Client 6", name: "Row item 2", totalReservations: 3, lastReservation: "Row item 4", status: "Silver" },
  { id: "Client 7", name: "Row item 2", totalReservations: 2, lastReservation: "Row item 4", status: "Bronze" },
  { id: "Client 8", name: "Row item 2", totalReservations: 1, lastReservation: "Row item 4", status: "Standard" },
  { id: "Client 9", name: "Row item 2", totalReservations: 45, lastReservation: "Row item 4", status: "Gold" },
  { id: "Client 10", name: "Row item 2", totalReservations: 30, lastReservation: "Row item 4", status: "Silver" },
  { id: "Client 11", name: "Row item 2", totalReservations: 29, lastReservation: "Row item 4", status: "Bronze" },
  { id: "Client 12", name: "Row item 2", totalReservations: 16, lastReservation: "Row item 4", status: "Standard" },
  { id: "Client 13", name: "Row item 2", totalReservations: 7, lastReservation: "Row item 4", status: "Gold" },
  { id: "Client 14", name: "Row item 2", totalReservations: 3, lastReservation: "Row item 4", status: "Silver" },
  { id: "Client 15", name: "Row item 2", totalReservations: 2, lastReservation: "Row item 4", status: "Bronze" },
  { id: "Client 16", name: "Row item 2", totalReservations: 1, lastReservation: "Row item 4", status: "Standard" },
  { id: "Client 17", name: "Row item 2", totalReservations: 45, lastReservation: "Row item 4", status: "Gold" },
  { id: "Client 18", name: "Row item 2", totalReservations: 30, lastReservation: "Row item 4", status: "Silver" },
  { id: "Client 19", name: "Row item 2", totalReservations: 29, lastReservation: "Row item 4", status: "Bronze" },
  { id: "Client 20", name: "Row item 2", totalReservations: 16, lastReservation: "Row item 4", status: "Standard" },
]

// Available fidelity status options
const fidelityStatusOptions = ["Standard", "Bronze", "Silver", "Gold", "Platinum"]

export default function FidelityManagementPage() {
  const [clients, setClients] = useState(clientsData)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState(null)
  const [newStatus, setNewStatus] = useState("")
  const { toast } = useToast()

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)

  // Calculate total pages
  const totalPages = Math.ceil(clients.length / itemsPerPage)

  // Get current clients
  const indexOfLastClient = currentPage * itemsPerPage
  const indexOfFirstClient = indexOfLastClient - itemsPerPage
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number.parseInt(value))
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  const handleEditClick = (client, index) => {
    // Calculate the actual index in the full clients array
    const actualIndex = indexOfFirstClient + index
    setSelectedClient({ ...client, index: actualIndex })
    setNewStatus(client.status)
    setIsEditDialogOpen(true)
  }

  const handleStatusChange = (value) => {
    setNewStatus(value)
  }

  const handleSaveStatus = () => {
    if (!selectedClient) return

    // Create a copy of the clients array
    const updatedClients = [...clients]

    // Update the status of the selected client
    updatedClients[selectedClient.index] = {
      ...selectedClient,
      status: newStatus,
    }

    // Update the state with the new array
    setClients(updatedClients)

    // Close the dialog
    setIsEditDialogOpen(false)

    // Show success toast
    toast({
      title: "Status Updated",
      description: `Client ${selectedClient.id} fidelity status updated to ${newStatus}`,
    })
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5 // Show at most 5 page numbers

    if (totalPages <= maxPagesToShow) {
      // If we have 5 or fewer pages, show all of them
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always show first page
      pageNumbers.push(1)

      // Calculate start and end of page numbers to show
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        end = 4
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis if needed
      if (start > 2) {
        pageNumbers.push("...")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Always show last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <div className="p-6 max-w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="outline" size="icon" className="rounded-md bg-[#1c2536]">
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <img src="/placeholder.svg?height=40&width=40&text=TZ" alt="TravelZy Logo" className="h-10" />
          <span className="text-2xl font-bold text-[#1c2536]">TravelZy</span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1c2536]">Fidelity Management</h1>
        <p className="text-gray-600 mt-1">Assign or Revoke Loyalty Based on Reservation Activity</p>
      </div>

      <div className="flex justify-end mb-6">
        <Select defaultValue="select">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="select">Select</SelectItem>
            <SelectItem value="assign">Assign Loyalty</SelectItem>
            <SelectItem value="revoke">Revoke Loyalty</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-[#1c2536] mb-6">Client List for Fidelity Management</h2>

        <div className="mb-6">
          <div className="text-gray-600">Manage Client Loyalty</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 font-medium">Client ID</th>
                <th className="text-left py-3 font-medium">Client Name</th>
                <th className="text-left py-3 font-medium">Total Reservations</th>
                <th className="text-left py-3 font-medium">Last Reservation Date</th>
                <th className="text-left py-3 font-medium">Fidelity Status</th>
                <th className="text-right py-3"></th>
              </tr>
            </thead>
            <tbody>
              {currentClients.map((client, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{client.id}</td>
                  <td className="py-4">{client.name}</td>
                  <td className="py-4">{client.totalReservations}</td>
                  <td className="py-4">{client.lastReservation}</td>
                  <td className="py-4">{client.status}</td>
                  <td className="text-right py-4">
                    <button
                      className="text-blue-400 hover:text-blue-600 font-medium"
                      onClick={() => handleEditClick(client, index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-sm text-gray-600 mr-2">Rows per page:</span>
            <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder={itemsPerPage} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-600 ml-4">
              Showing {indexOfFirstClient + 1}-{Math.min(indexOfLastClient, clients.length)} of {clients.length}
            </span>
          </div>

          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mr-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-1">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-2">
                    ...
                  </span>
                ) : (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? "bg-[#e66a5e] hover:bg-[#d55d51] text-white" : ""}
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="ml-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Edit Fidelity Status Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Fidelity Status</DialogTitle>
            <DialogDescription>Update the loyalty status for client {selectedClient?.id}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="client-id" className="text-right">
                Client ID
              </Label>
              <div className="col-span-3 font-medium">{selectedClient?.id}</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="current-status" className="text-right">
                Current Status
              </Label>
              <div className="col-span-3">{selectedClient?.status}</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-status" className="text-right">
                New Status
              </Label>
              <div className="col-span-3">
                <Select value={newStatus} onValueChange={handleStatusChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select new status" />
                  </SelectTrigger>
                  <SelectContent>
                    {fidelityStatusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveStatus} className="bg-[#183957] hover:bg-[#122c43] text-white">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
