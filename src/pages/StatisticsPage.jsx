"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, DollarSign, ShoppingCart, Users, Calendar } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Switch } from "../components/ui/switch"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default function StatisticsPage() {
  const [mapView, setMapView] = useState(false)
  const [timeframe, setTimeframe] = useState("monthly")

  // Sample data for the statistics cards
  const statsCards = [
    {
      title: "Total Balance",
      value: "$12,489",
      change: "+0.43%",
      icon: <DollarSign className="h-5 w-5 text-blue-500" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Total Revenue",
      value: "$2,572",
      change: "+4.35%",
      icon: <ShoppingCart className="h-5 w-5 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Total Traveler",
      value: "1500",
      change: "+2.59%",
      icon: <Users className="h-5 w-5 text-indigo-500" />,
      iconBg: "bg-indigo-100",
    },
    {
      title: "Total Reservations",
      value: "156",
      change: "+0.95%",
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
      iconBg: "bg-purple-100",
    },
  ]

  // Chart data
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Revenue",
        data: [2500, 1800, 2200, 3200, 4200, 3800, 3200, 3600, 2800, 3900, 5200, 4800],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: false,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Bookings",
        data: [1500, 1200, 1800, 2800, 3500, 2900, 2200, 2600, 1800, 2900, 3200, 2800],
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        fill: false,
        pointBackgroundColor: "rgb(16, 185, 129)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#1f2937",
        bodyColor: "#1f2937",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          labelPointStyle: () => ({
            pointStyle: "circle",
            rotation: 0,
          }),
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(229, 231, 235, 0.5)",
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(229, 231, 235, 0.5)",
        },
        ticks: {
          color: "#6b7280",
          callback: (value) => `$${value}`,
        },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">249 Results</h1>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search Here..." className="pl-10 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Map View</span>
            <Switch checked={mapView} onCheckedChange={setMapView} />
          </div>

          <Button variant="outline" className="rounded-full">
            <Filter size={18} className="mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList className="mb-6 border-b w-full justify-start rounded-none bg-transparent">
          <TabsTrigger
            value="recommended"
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#e66a5e] rounded-none bg-transparent"
          >
            Recommended
          </TabsTrigger>
          <TabsTrigger
            value="popular"
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#e66a5e] rounded-none bg-transparent"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger
            value="nearest"
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#e66a5e] rounded-none bg-transparent"
          >
            Nearest
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsCards.map((card, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${card.iconBg}`}>{card.icon}</div>
                    <span
                      className={`text-sm font-medium ${card.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                    >
                      {card.change} ↑
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">{card.value}</h3>
                    <p className="text-sm text-gray-500">{card.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="overflow-hidden mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold">$35.8K</h2>
                  <p className="text-sm text-gray-500">Overall Revenue</p>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={20} />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">$4,350</h3>
                    <p className="text-sm text-gray-500">Earned this month</p>
                  </div>
                </div>

                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Oct 25</span>
                    <span className="text-sm font-bold">$3,780</span>
                  </div>
                </div>
              </div>

              <div className="h-[300px]">
                <Line data={chartData} options={chartOptions} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="popular" className="mt-0">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h3 className="text-xl font-medium">Popular Content</h3>
            <p className="text-gray-500 mt-2">This tab is under development.</p>
          </div>
        </TabsContent>

        <TabsContent value="nearest" className="mt-0">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h3 className="text-xl font-medium">Nearest Content</h3>
            <p className="text-gray-500 mt-2">This tab is under development.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
