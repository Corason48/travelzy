export default function Logo() {
    return (
      <div className="flex items-center">
        <div className="relative h-10 w-10">
          <div className="absolute top-0 left-0 h-0 w-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#172432]" />
          <div className="absolute top-1 left-3 h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#ff6b6b]" />
        </div>
        <span className="ml-2 text-2xl font-bold text-[#172432]">TravelZy</span>
      </div>
    )
  }
  