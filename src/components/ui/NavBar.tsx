import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header className="bg-global  mb-16 relative h-20">
        <Link to="/home"> <img src="/images/logo.png" className="w-80 px-10 pt-5 " alt="log" /></Link>
        <div className="bg-black h-10  "></div>
        <nav>
            
        </nav>
    </header>
  )
}
export default NavBar