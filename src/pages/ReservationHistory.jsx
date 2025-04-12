import { ChevronLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Link } from "react-router-dom"

// Sample data
const completedReservations = [
  { id: 1, location: "UK, London", date: "12 Mar 2021 at 2:00 PM", price: 1000 },
  { id: 2, location: "France, Paris", date: "12 Mar 2021 at 2:00 PM", price: 1000 },
]

const upcomingReservations = []

export default function ReservationHistory() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">Home</h1>
      </div>

      <h2 className="text-3xl font-bold mb-6">Reservation History</h2>

      <Tabs defaultValue="completed">
        <TabsList className="mb-6 border-b w-full justify-start rounded-none bg-transparent">
          <TabsTrigger
            value="completed"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            value="upcoming"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent"
          >
            Upcoming
          </TabsTrigger>
        </TabsList>

        <TabsContent value="completed">
          <div className="space-y-4">
            {completedReservations.map((reservation) => (
              <div key={reservation.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{reservation.location}</h3>
                  <p className="text-sm text-gray-500">{reservation.date}</p>
                </div>
                <div className="font-bold">$ {reservation.price} USD</div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          {upcomingReservations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No upcoming reservations</p>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingReservations.map((reservation) => (
                <div key={reservation.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{reservation.location}</h3>
                    <p className="text-sm text-gray-500">{reservation.date}</p>
                  </div>
                  <div className="font-bold">$ {reservation.price} USD</div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
