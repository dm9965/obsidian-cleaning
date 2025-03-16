import {Form, FormGroup, Input, Label} from "reactstrap";
import React, {useEffect, useState} from "react";
import ObsidianButton from "./ObsidianButton.tsx";
import SuccessCheck from "./SuccessCheck.tsx";
import EmailService from "../services/EmailService.ts";
import {useSanitizeEmail, useSanitizeInput, useSanitizePhone} from "../constants/Sanitize.ts";

const Estimates = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [serviceRequested, setServiceRequested] = useState([]);
    const [additionalComments, setAdditionalComments] = useState("");
    const [formErrors, setFormErrors] = useState([]);
    const [displaySuccess, setDisplaySuccess] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (setter, index, validator) => (e) => {
        const value = useSanitizeInput(e.target.value.trim());
        setter(value);

        if (validator && !validator(value)) {
            setFormErrors((prev) => {
                let errors = [...prev];
                errors[index] = true;
                return errors;
            });
        } else {
            setFormErrors((prev) => {
                let errors = [...prev];
                errors[index] = false;
                return errors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setEmailError("");
        setPhoneError("");

        let newFormErrors = [!firstName, !lastName, !companyName, !emailAddress, !phoneNumber, !serviceRequested];
        let hasError = newFormErrors.includes(true);

        if (!emailAddress) {
            newFormErrors[3] = true;
            setEmailError("Email address is required.");
            hasError = true;
        }

        if (emailAddress && !useSanitizeEmail(emailAddress)) {
            newFormErrors[3] = true;
            setEmailError("Please enter a valid email address.");
            hasError = true;
        }

        if (!phoneNumber) {
            newFormErrors[4] = true;
            setPhoneError("Phone number is required.");
            hasError = true;
        }

        if (phoneNumber && !useSanitizePhone(phoneNumber)) {
            newFormErrors[4] = true;
            setPhoneError("Please enter a valid phone number.");
            hasError = true;
        }

        if (serviceRequested.length === 0) {
            newFormErrors[5] = true;
            hasError = true;
        }

        setFormErrors(newFormErrors);

        if (!hasError) {
            try {
                await EmailService.requestEstimate({ firstName, lastName, companyName, emailAddress, phoneNumber, serviceRequested, additionalComments });
                setDisplaySuccess(true);
                resetForm();
            } catch (error) {
                console.warn(error.message);
            }
        }
        setIsSubmitting(false);
    };

    const resetForm = () => {
        setEmail("");
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setPhoneNumber("");
        setServiceRequested([]);
        setAdditionalComments("");
        setFormErrors([]);
        setDisplaySuccess(false);
    };

    const selectService = (service) => {
        setServiceRequested((prevServices) =>
            prevServices.includes(service) ? prevServices.filter(s => s !== service) : [...prevServices, service]
        );
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
                            value={firstName}
                            type={"text"}
                            placeholder={"First Name"}
                            onChange={handleInputChange(setFirstName, 0, null)}
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
                            value={lastName}
                            type={"text"}
                            placeholder={"Last Name"}
                            onChange={handleInputChange(setLastName, 1, null)}
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
                            value={companyName}
                            placeholder={"Company Name"}
                            onChange={handleInputChange(setCompanyName, 2, null)}
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
                            value={emailAddress}
                            placeholder={"Email Address"}
                            onChange={handleInputChange(setEmail, 3, useSanitizeEmail)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[3] && (
                            <p className={"tw-text-error tw-mb-0"}> {emailError} </p>
                        )}
                    </Label>
                    <Label className={"tw-text-xs"}>
                        Phone: &nbsp;
                        <Input
                            value={phoneNumber}
                            type={"tel"}
                            placeholder={"Phone Number"}
                            onChange={handleInputChange(setPhoneNumber, 4, useSanitizePhone)}
                            style={{
                                fontSize:".55rem"
                            }}
                        />
                        {formErrors[4] && (
                            <p className={"tw-text-error tw-mb-0"}> {phoneError} </p>
                        )}
                    </Label>
                    {/* Allow multiple selections for dropdown, change to checkbox */}
                    <Label className="tw-text-xs tw-bg-none tw-flex tw-flex-col">
                        Service(s) Requested: &nbsp;
                        <div className={"tw-grid tw-grid-cols-2"}>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes("Nightly Janitorial")}
                                    onChange={() => selectService('Nightly Janitorial')}
                                />
                                <Label check>Nightly Janitorial</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes("Floor Stripping and Waxing")}
                                    onChange={() => selectService( 'Floor Stripping and Waxing')}
                                />
                                <Label check>Floor Stripping & Waxing</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes("Shipping and Receiving Cleaning")}
                                    onChange={() => selectService( 'Shipping and Receiving Cleaning')}/>
                                <Label check>Shipping & Receiving</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    className={"tw-text-xs"}
                                    type={"checkbox"}
                                    checked={serviceRequested.includes("Disinfecting and Sanitization")}
                                    onChange={() => selectService('Disinfecting and Sanitization')}/>
                                <Label check>Disinfecting and Sanitization</Label>
                            </FormGroup>
                        </div>
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
                        type={"submit"}
                        disabled={formErrors}
                    >
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
    );
};

export default Estimates;