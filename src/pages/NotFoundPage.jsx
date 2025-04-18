import { MapPin, ArrowLeft, Compass } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import Logo from "@/components/Logo"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="mb-6">
          <Link to="/" className="inline-block">
            <Logo/>
          </Link>
        </div>

        <div className="my-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Compass className="text-[#e66a5e] w-32 h-32" strokeWidth={1} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-[#183957] font-bold text-4xl">404</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#183957] mb-2">Destination Not Found</h2>
          <p className="text-gray-600 mb-6">
            It seems you've ventured off the map. The destination you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex items-center justify-center gap-2 text-[#e66a5e] mb-6">
            <MapPin />
            <span className="text-sm">Current location: Unknown territory</span>
          </div>
          <Link to="/">
            <Button className="bg-[#183957] hover:bg-[#122c43]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
