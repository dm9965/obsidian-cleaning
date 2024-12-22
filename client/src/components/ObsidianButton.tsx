import PropTypes from "prop-types";

const ObsidianButton = (props) => {
    const {
        onClick,
        type,
        style,
        children
    } = props;

    return (
        <button onClick={onClick} type={type} className={`tw-rounded-full tw-shadow-lg tw-bg-primary-orange hover:tw-bg-[#D35A04FF] tw-px-3 tw-py-1  tw-text-[#fff] tw-text-[.65rem] ${style}`}>
            {children}
        </button>
    )
}

ObsidianButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.string,
}

export default ObsidianButton;