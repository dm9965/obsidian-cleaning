const Navigation = () => {
    return (
        <div className={"retro-container tw-w-full tw-fixed tw-top-0 tw-left-0"}>
            <div className={"tw-flex tw-flex-row tw-justify-between tw-h-full tw-relative"}>
                <div className={"tw-h-full tw-gap-y-0"}>
                    <h2 className={"tw-text-2xl"}> Welcome to </h2>
                    <h2 className={"tw-text-4xl"}> Obsidian Cleaning</h2>
                </div>
                <div className={"tw-h-full tw-flex tw-gap-x-3 tw-absolute tw-right-0 tw-items-end"}>
                    <a>
                        Home
                    </a>
                    <a>
                        Services
                    </a>
                    <a>
                        About Us
                    </a>
                    <a>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;