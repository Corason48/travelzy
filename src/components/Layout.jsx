
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout() {
  


  

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Sidebar/>
      {/* Footer - Will appear on all pages */}
      <Footer />
    </div>
  )
}
