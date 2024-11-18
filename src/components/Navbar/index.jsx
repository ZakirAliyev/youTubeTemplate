import './index.scss'
import {FaBell} from "react-icons/fa";
import {HiVideoCamera} from "react-icons/hi";
import {HiMiniBars3} from "react-icons/hi2";
import {IoMdMic} from "react-icons/io";
import {CiSearch} from "react-icons/ci";

function Navbar() {
    return (
        <section id={"navbar"}>
            <nav>
                <div className={"left"}>
                    <HiMiniBars3 className={"icon"}/>

                    <div className={"img"}>
                        <img src={"src/assets/youtubeLogo.png"} alt={"Youtube"}/>
                    </div>
                </div>
                <div className={"center"}>
                    <div className={"wrapper"}>
                        <input placeholder={"Axtarın"}/>
                        <button className={"search"} type={"submit"}>
                            <CiSearch/>
                        </button>
                    </div>
                    <button>
                        <IoMdMic className={"icon"}/>
                    </button>
                </div>
                <div className={"right"}>
                    <HiVideoCamera className={"icon"}/>
                    <FaBell className={"icon"}/>
                    <div className={"img"}>
                        <img src={"https://avatars.githubusercontent.com/u/106933941?v=4"} alt={"Profile Image"}/>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;