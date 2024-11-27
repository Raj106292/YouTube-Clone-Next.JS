import "./style.css";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";

const Header = () => {
    return(
        <header>
            <Image alt="logo" src={logo}/>
        </header>
    )
}

export default Header