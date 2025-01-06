import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label} from "reactstrap";
import { useState} from "react";
import ObsidianButton from "./ObsidianButton.tsx";
import SuccessCheck from "./SuccessCheck.tsx";
import EmailService from "../services/EmailService.ts";


const Estimates = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [serviceRequested, setServiceRequested] = useState({});
    const [additionalComments, setAdditionalComments] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownLabel, setDropdownLabel] = useState("Select a Service");
    const [formErrors, setFormErrors] = useState([]);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = [firstName, lastName, companyName, emailAddress, phoneNumber, serviceRequested];
        const error = validateInput(formData);
        const message = {
            firstName, lastName, companyName, emailAddress, phoneNumber, serviceRequested, additionalComments
        };
        if (!error) {
            try {
                console.log("Form submitted!");
                return await EmailService.requestEstimate(message);
            } catch (error) {
                console.warn(error.message)
            }
            setDisplaySuccess(true);
            resetForm();
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const resetForm = () => {
        setDropdownOpen(false);
        setEmail("");
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setDropdownLabel("Select a Service");
        setServiceRequested("");
        setAdditionalComments("");
        setFormErrors([]);
        setDisplaySuccess(false);
    };

    const selectService = (service) => {
        setServiceRequested(service);
        setDropdownLabel(service);
        setDropdownOpen(false);
    }

    const validateInput = (formData) => {
        const errors = formData.map((input) => input === "" || input === "Select a Service");
        const hasError = errors.some((error) => error);
        setFormErrors(errors);
        return hasError;
    };

    return (
        <div className={"tw-p-6 tw-relative"}>
            <div className={"tw-text-primary-black"}>
                <h2 className={"tw-font-poppins tw-font-bold tw-text-lg"}> Request an Estimate </h2>
                <p className={"tw-w-3/4 tw-py-3"}> Fill out the form below to request a free estimate, including your name, email, the services you are looking for, and an optional description/message. </p>
            </div>
            <hr className={"tw-text-primary-black"}/>
            <Form onSubmit={handleSubmit} className={"tw-text-xs tw-flex tw-flex-col tw-py-3 tw-font-poppins"}>
                <FormGroup className={"tw-flex tw-flex-col tw-gap-y-2"}>
                    <Label className={"tw-text-xs"}>
                        First Name: &nbsp;
                        <Input
                            type={"text"}
                            placeholder={"First Name"}
                            onChange={(e) => setFirstName(e.target.value)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[0] && (
                            <p className={"tw-text-error tw-mb-0"}> First name is required. </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Last Name: &nbsp;
                        <Input
                            type={"text"}
                            placeholder={"Last Name"}
                            onChange={(e) => setLastName(e.target.value)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[1] && (
                            <p className={"tw-text-error tw-mb-0"}> Last name is required </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Company Name: &nbsp;
                        <Input
                            type={"text"}
                            placeholder={"Company Name"}
                            onChange={(e) => setCompanyName(e.target.value)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[2] && (
                            <p className={"tw-text-error tw-mb-0"}> Company name is required. </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Email: &nbsp;
                        <Input
                            type={"text"}
                            placeholder={"Email Address"}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[3] && (
                            <p className={"tw-text-error tw-mb-0"}> Email address is required. </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Phone: &nbsp;
                        <Input
                            type={"tel"}
                            placeholder={"Phone Number"}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[4] && (
                            <p className={"tw-text-error tw-mb-0"}> Phone number is required. </p>
                        )}
                    </Label>
                    {/* Allow multiple selections for dropdown, change to checkbox */}
                    <Label className="tw-text-xs tw-bg-none tw-flex tw-flex-col">
                        Service Requested: &nbsp;
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{
                            fontSize:".55rem"
                        }}>
                            <DropdownToggle
                                caret
                                className="tw-w-full tw-border-b tw-border-b-primary-orange tw-text-primary-black tw-flex tw-justify-between"
                                style={{
                                    fontSize:".55rem"
                                }}
                            >
                                {dropdownLabel}
                            </DropdownToggle>
                            <DropdownMenu className={"tw-w-full"}>
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService('Nightly Janitorial')}>Nightly Janitorial</DropdownItem>
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService( 'Floor Stripping and Waxing')}>Floor Stripping and Waxing</DropdownItem>
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService( 'Shipping and Receiving Cleaning')}>Shipping and Receiving Bay Cleaning</DropdownItem>
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService('Disinfecting and Sanitization')}>Disinfecting and Sanitization</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {formErrors[5] && (
                            <p className={"tw-text-error tw-mb-0"}> Service requested is required. </p>
                        )}
                    </Label>
                    <Label className={"tw-flex tw-flex-col"}>
                        Additional Comments (Optional): &nbsp;
                        <textarea
                            className={"tw-border-[#ccc] tw-text-primary-black tw-border-b-2 tw-bg-[#fff] tw-text-xs"}
                            placeholder={"Anything else you'd like us to know?"}
                            onChange={(e) => setAdditionalComments(e.target.value)}
                        />
                    </Label>
                    <ObsidianButton
                        onClick={(e) => handleSubmit(e)}
                        type={"submit"}>
                        Submit Estimate Request
                    </ObsidianButton>
                </FormGroup>
            </Form>
            {displaySuccess &&
                <div className={"tw-fixed tw-top-1/4 tw-left-[33%] tw-bg-[#fff] tw-p-6 tw-border tw-border-primary-gray tw-rounded-lg"}>
                    <SuccessCheck/>
                    <p className={"tw-text-success tw-font-poppins tw-font-semibold"}>Estimate successfully submitted!</p>
                    <div className={"tw-w-full tw-flex tw-justify-center"}>
                        <ObsidianButton onClick={() => setDisplaySuccess(false)}> Close </ObsidianButton>
                    </div>
                </div>
            }
        </div>
    )
}

export default Estimates;