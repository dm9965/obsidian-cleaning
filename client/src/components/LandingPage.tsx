import { LiaBroomSolid } from "react-icons/lia";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className={"tw-grid tw-grid-cols-2 tw-grid-rows-2 tw-row-auto tw-gap-3 tw-"}>
            <div
                className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>
                <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Services </h2>
                <LiaBroomSolid className={"tw-w-1/2 tw-p-3"} size={"sm"}/>
            </div>
            <div
                className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>
                <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Locations </h2>
                <FaMapMarkerAlt className={"tw-w-1/3 tw-p-3"} size={"sm"}/>
            </div>
            <div
                className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>
                <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> More Info </h2>
                <FaInfoCircle className={"tw-w-1/3 tw-p-3"} size={"sm"}/>
            </div>
            <div
                className={"tw-w-full tw-flex tw-flex-col tw-items-center tw-p-3 tw-rounded-lg tw-bg-primary-blue hover:tw-bg-primary-dark-blue hover:tw-cursor-pointer"}>
                <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Reviews </h2>
                <FaComment className={"tw-w-1/3 tw-p-3"} size={"sm"}/>
            </div>
            <div className={"tw-fixed tw-bottom-0"}>
                <a href="https://www.textstudio.com/">Font generator</a>
            </div>
        </div>
    )
}

export default LandingPage;