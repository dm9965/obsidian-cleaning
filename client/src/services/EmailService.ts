import {createClient} from "@supabase/supabase-js";

const supabase_url = `https://${import.meta.env.VITE_SUPABASE_PROJECT}.supabase.co`;
const key = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabase_url, key);

const EmailService = {
    requestEstimate: async (message: object) => {
        const {
            firstName,
            lastName,
            companyName,
            phoneNumber,
            emailAddress,
            serviceRequested,
            additionalComments
        } = message;
        const services = serviceRequested.join(", ");
        return supabase.from('Emails').insert([{
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
            serviceRequested: services,
            additionalComments: additionalComments
        }]);
    }
};

export default EmailService;