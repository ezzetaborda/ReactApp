import logo from "../image/minilogo.png"
const Footer = () =>{
    return(
        <footer>
            <div class="logo">
            <img src={logo}></img>
            </div>
            <div class="socialMedia">
                <a href="" class="twitter">twIcon</a>
                <a href="" class="instagram">igIcon</a>
                <a href="" class="git">gitIcon</a>
            </div>
        </footer>
    )
}
export default Footer