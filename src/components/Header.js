import logo from "../image/minilogo.png"
import Cart from "../components/CartWidget"

const Header = (props) => {
    console.log(props.saludo)
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div class="titulo">
                    <h2>ZETA</h2>
                </div>
                <div className="links">
                    <a href="" class="Skills">Skills</a>
                    <a href="" class="Me">About Me</a>
                    <a href="" class="Contact">Contact</a>
                </div>
                <Cart/>
            </nav>
        </header>
    )
}
export default Header