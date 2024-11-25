import Logo from "../assets/images/Obsidian.png";

const Navigation = () => {
    return (
        <div className={"tw-w-lvw tw-fixed tw-top-0 tw-left-0 tw-border-b-4 tw-border-b-obsidianPink tw-min-h-[5rem] tw-max-h-[5rem] tw-flex tw-items-center tw-bg-background"}>
            <div className={"tw-flex tw-flex-row tw-justify-between tw-h-full"}>
                <div className={"tw-h-full tw-gap-y-0 tw-pb-3"}>
                    <img src={Logo} className={"tw-w-3/4"} alt={'Obsidian Logo'}/>
                </div>
                <div className={"tw-font-header tw-w-full tw-flex tw-gap-x-3 tw-text-sm tw-justify-between tw-align-bottom tw-items-end tw-px-6 tw-pb-3"}>
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
        </div>
    )
}

export default Navigation;