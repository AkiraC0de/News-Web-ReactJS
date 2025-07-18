import Header from "./components/Header/Header"
import SideBar from "./components/Sidebar/SideBar"
import IndexRoute from "./routes/indexRoute"

function App() {
  return (
    <div className="grid grid-cols-[220px_1fr]">
      <div className="h-full">
        <SideBar/>
      </div>
      <div>
        <Header/>
        <main className="w-full h-full rounded-tl-2xl p-8 inset-shadow-black shadow-[inset_0_4px_5px_rgba(0,0,0,0.1)] bg-[#f8efec]">
          <IndexRoute/> 
        </main> 
      </div>
    </div>
  )
}

export default App
