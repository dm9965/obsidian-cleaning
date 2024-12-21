import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label} from "reactstrap";
import { useState} from "react";

const Estimates = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [serviceRequested, setServiceRequested] = useState("");
    const [additionalComments, setAdditionalComments] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownLabel, setDropdownLabel] = useState("Select a Service");

    const onSubmit = () => {
        console.log("Form submitted!");
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const selectService = (service) => {
        setServiceRequested(service);
        setDropdownLabel(service);
        setDropdownOpen(false);
    }

    return (
        <div className={"tw-p-10"}>
            <div className={"tw-text-primary-black"}>
                <h2 className={"tw-font-poppins tw-font-bold tw-text-lg"}> Request an Estimate </h2>
                <p className={"tw-w-3/4 tw-py-3"}> Fill out the form below to request a free estimate, including your name, email, the services you are looking for, and an optional description/message. </p>
            </div>
            <hr className={"tw-text-primary-black"}/>
            <Form className={"tw-text-xs tw-flex tw-flex-col tw-py-3 tw-font-poppins"}>
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
                    </Label>
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
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService('Service 1')}>Service 1</DropdownItem>
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService('Service 2')}>Service 2</DropdownItem>
                                <DropdownItem className={"tw-text-xs"} onClick={() => selectService('Service 3')}>Service 3</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Label>
                    <Label className={"tw-flex tw-flex-col"}>
                        Additional Comments (Optional): &nbsp;
                        <textarea
                            className={"tw-border-[#ccc] tw-text-primary-black tw-border-b-2 tw-bg-[#fff] tw-text-xs"}
                            placeholder={"Anything else you'd like us to know?"}
                            onChange={(e) => setAdditionalComments(e.target.value)}
                        />
                    </Label>
                    <button onClick={onSubmit} type={"submit"} className={"tw-rounded-full tw-shadow-lg tw-text-sm tw-bg-primary-orange hover:tw-bg-[#D35A04FF] tw-text-[#fff] tw-font-medium tw-p-2"}>
                        Submit Estimate Request
                    </button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Estimates;