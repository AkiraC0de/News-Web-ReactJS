import Logo from "../Logo"
import DateAndTime from "./DateAndTime"
import Nav from "./Nav"

const SideBar = () => {
  return (
    <div className="p-6 flex flex-col gap-10">
        <Logo/>
        <DateAndTime/>
        <Nav/>
    </div>
  )
}
export default SideBar