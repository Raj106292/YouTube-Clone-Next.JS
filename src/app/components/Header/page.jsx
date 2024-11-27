import "./style.css";
import Link from "next/link";
import Search from "./search";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import logo from "../../../assets/images/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    {/* ------part one start------ */}
                    <div className="col-sm-3 d-flex align-items-center part1">
                        <Button className="button rounded-circle d-flex align-items-center justify-content-center"><IoMdMenu className="text-white" /></Button>

                        <Link href="/" className="mx-2 logo"><Image alt="app_logo" src={logo} /></Link>
                    </div>
                    {/* ------part one end------ */}

                    {/* ------part two start------ */}
                    <div className="col-sm-6 d-flex align-items-center part2">
                        <Search />
                    </div>
                    {/* ------part two end------ */}

                    {/* ------part three start------ */}
                    <div className="col-sm-3 d-flex align-items-center justify-content-end part3 ">
                        <Button className="button rounded-circle d-flex align-items-center justify-content-center mx-3"><IoNotificationsOutline className="text-white" /></Button>
                        <span className="rounded-circle overflow-hidden cursor">
                            <Image alt="profileImage" src={logo} />
                        </span>
                    </div>
                    {/* ------part three end------ */}
                </div>
            </div>
        </header>
    )
}

export default Header