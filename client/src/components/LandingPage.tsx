import { LiaBroomSolid } from "react-icons/lia";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import Stock from "../assets/images/CleaningStockImage.jpg";
import Office from "../assets/images/office.jpg";

const LandingPage = () => {
    return (
        <div className={""}>
            <div className={"tw-relative"}>
                <img src={Stock} className={"tw-w-full tw-brightness-75"}/>
                <div className={"tw-absolute tw-left-10 tw-top-20 tw-font-poppins"}>
                    <p className={"tw-font-bold tw-w-3/5 tw-text-primary-white tw-pb-3"}> Professional Cleaning Service since 2019 </p>
                    <button className={"tw-rounded-full tw-shadow-lg tw-text-xs tw-bg-primary-orange hover:tw-bg-[#D35A04FF]"}> Get Started </button>
                </div>
            </div>
            <div className={"tw-flex tw-flex-row tw-py-3 tw-text-primary-dark-blue tw-font-poppins"}>
                <div className={"tw-grid tw-grid-cols-2 tw-p-6 tw-text-xs"}>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <p className={"tw-text-[.65rem] tw-font-semibold tw-leading-tight"}>Offices</p>
                        <div
                            className={"tw-aspect-w-1 tw-aspect-h-1 tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={Office} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"} alt="Office"/>
                        </div>
                    </div>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <p className={"tw-text-[.65rem] tw-font-semibold tw-leading-tight"}>Receiving</p>
                        <div
                            className={"tw-aspect-w-1 tw-aspect-h-1 tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={Office} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"} alt="Receiving"/>
                        </div>
                    </div>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <div
                            className={"tw-aspect-w-1 tw-aspect-h-1 tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={Office} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"}
                                 alt="Laboratories"/>
                        </div>
                        <p className={"tw-text-[.65rem] tw-font-semibold tw-leading-tight"}>Laboratories</p>
                    </div>
                    <div className={"tw-flex tw-flex-col tw-items-center"}>
                        <div
                            className={"tw-aspect-w-1 tw-aspect-h-1 tw-bg-gray-100 tw-flex tw-items-center tw-justify-center"}>
                            <img src={Office} className={"tw-object-cover tw-w-full tw-h-full tw-p-2"}
                                 alt="Retail Spaces"/>
                        </div>
                        <p className={"tw-text-[.65rem] tw-font-semibold tw-leading-tight"}>Retail Spaces</p>
                    </div>
                </div>
                <div className={"tw-p-6 tw-flex tw-items-center"}>
                    <h2 className={"tw-font-bold"}> Keep Your Business Clean and Running on All Cylinders with
                        Obsidian Cleaning</h2>
                </div>
            </div>
            {/*<div*/}
            {/*    className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>*/}
            {/*    <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Services </h2>*/}
            {/*    <LiaBroomSolid className={"tw-w-1/2 tw-p-3"} size={"sm"}/>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>*/}
            {/*    <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Locations </h2>*/}
            {/*    <FaMapMarkerAlt className={"tw-w-1/3 tw-p-3"} size={"sm"}/>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>*/}
            {/*    <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> More Info </h2>*/}
            {/*    <FaInfoCircle className={"tw-w-1/3 tw-p-3"} size={"sm"}/>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>*/}
            {/*    <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Reviews </h2>*/}
            {/*    <FaComment className={"tw-w-1/3 tw-p-3"} size={"sm"}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default LandingPage;