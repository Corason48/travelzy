import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative">
        <div className="w-10 h-10 bg-[#172432] rotate-45 transform origin-center"></div>
        <div className="absolute top-0 left-0 w-8 h-8 bg-[#ff6b6b] rounded-tl-lg"></div>
      </div>
      <span className="text-2xl font-bold text-[#172432]">TravelZy</span>
    </Link>
  )
}
