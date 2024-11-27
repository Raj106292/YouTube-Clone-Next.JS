import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import logo from "../../../assets/images/logo.png";

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 d-flex align-items-center part1">
                        <Button className="button rounded-circle d-flex align-items-center justify-content-center"><IoMdMenu className="text-white" /></Button>

                        <Link href="/" className="mx-2 logo"><Image alt="app_logo" src={logo} /></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header