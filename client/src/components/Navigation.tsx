import Logo from "../assets/images/ObsidianNew.png";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

const Navigation = () => {
    return (
        <header
            className={"tw-w-full tw-z-1 tw-flex tw-flex-col tw-items-center tw-bg-primary-dark-blue"}>
            <div className={"tw-flex tw-w-full tw-items-start tw-justify-between"}>
                <img src={Logo} className={"tw-w-48 tw-p-2"} alt={'Obsidian Logo'}/>
                <div className={"tw-text-primary-white tw-h-full tw-font-poppins tw-flex tw-justify-center tw-items-center tw-gap-x-6 tw-mt-3 tw-px-6"}>
                    <div className={"tw-flex tw-flex-col tw-items-start"}>
                        <div className={"tw-flex tw-text-sm tw-items-center"}>
                            <FaPhone className={"tw-fill-primary-orange"}/>
                            <div className={"tw-pl-1"}> Call Us! </div>
                        </div>
                        <p className={"tw-font-bold tw-text-sm"}>585-555-5555</p>
                    </div>
                    <div>
                        <div className={"tw-flex tw-text-sm tw-items-center"}>
                            <FaMapMarkerAlt className={"tw-fill-primary-orange"}/>
                            <div className={"tw-pl-1"}> Service Area </div>
                        </div>
                        <p className={"tw-font-bold tw-text-sm"}>Rochester, NY</p>
                    </div>
                </div>
            </div>
            <div className={"tw-bg-primary-dark-blue tw-w-full tw-flex tw-justify-center"}>
                <div
                    className={"tw-flex tw-font-poppins tw-font-semibold tw-w-full tw-px-6 tw-gap-x-3 tw-items-center tw-text-xs tw-justify-between tw-p-2 tw-h-[2rem]"}>
                    <a href={"/"} className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Home
                    </a>
                    <a href={"/Services"} className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Services
                    </a>
                    <a href={"/Estimates"} className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        Get an Estimate
                    </a>
                    <a href={"/About"} className={"hover:tw-border-b-2 hover:tw-border-b-primary-orange tw-text-[.75rem] tw-text-primary-white tw-no-underline"}>
                        About
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navigation;