import "./Header.css"
import logo from "../assets/easyqr_logo.png"; // importa a logo

const Header = () => {
  return (
    <header>
        <div className='container'>
            
            <img className='easyqr_logo' src={logo} alt="logo"/>
            <span className="logo_name">EasyQR</span>
        </div>
    </header>
  )
}

export default Header
