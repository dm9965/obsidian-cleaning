import Logo from "../assets/images/ObsidianNew.png";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

const Navigation = () => {
    return (
        <header
            className={"tw-w-full tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-bg-primary-white"}>
            <div className={"tw-flex tw-w-full tw-items-start tw-justify-between"}>
                <img src={Logo} className={"tw-w-48 tw-p-2 tw-"} alt={'Obsidian Logo'}/>
                <div
                    className={"tw-text-primary-dark-blue tw-h-full tw-font-poppins tw-flex tw-justify-center tw-items-center tw-gap-x-6 tw-px-3"}>
                    <div>
                        <div className={"tw-flex tw-items-center tw-text-[.5rem] tw-leading-tight"}>
                            <FaPhone className={"tw-fill-primary-orange"}/>
                            <p className={"tw-pl-1"}> Call Us! </p>
                        </div>
                        <p className={"tw-font-bold tw-text-xs"}>585-555-5555</p>
                    </div>
                    <div>
                        <div className={"tw-flex tw-items-center tw-text-[.5rem] tw-leading-tight"}>
                            <FaMapMarkerAlt className={"tw-fill-primary-orange"}/>
                            <p className={"tw-pl-1"}> Service Area </p>
                        </div>
                        <p className={"tw-font-bold tw-text-xs"}>Rochester, NY</p>
                    </div>
                </div>
            </div>
            <div className={"tw-bg-primary-dark-blue tw-w-full tw-flex tw-justify-center"}>
                <div
                    className={"tw-flex tw-font-poppins tw-font-semibold tw-w-3/4 tw-gap-x-3 tw-text-xs tw-justify-between tw-p-2"}>
                    <a>
                        Home
                    </a>
                    <a>
                        Services
                    </a>
                    <a>
                        About
                    </a>
                    <a>
                        Contact
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navigation;