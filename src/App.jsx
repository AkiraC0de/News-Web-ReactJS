import Header from "./components/Header/Header"
import SideBar from "./components/Sidebar/SideBar"
import IndexRoute from "./routes/indexRoute"

function App() {
  return (
    <div className="grid grid-cols-[220px_1fr]">
      <SideBar/>
      <main className="bg-yellow-50">
        <Header/>
        <IndexRoute/> 
      </main> 
    </div>
  )
}

export default App
