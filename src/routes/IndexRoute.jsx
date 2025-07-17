import { Routes, Route } from "react-router"
import Home from "../pages/Home"

const IndexRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/global" element={<Home />} />
    </Routes>
  )
}

export default IndexRoute