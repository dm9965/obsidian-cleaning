import sanitizeHtml from "sanitize-html";
import {emailRegex, phoneRegex} from "./RegexTest.js";

    const sanitizeInput = (input) => {
        const cleaned = sanitizeHtml(input, {
            allowedTags: [ 'b', 'i'],
            disallowedTagsMode: 'escape'
        });
        return cleaned
            .replace(/"/gm, '&quot;')
            .replace(/'/gm, '&#39;');
    };

    const sanitizeEmail = (input) => {
        const initialClean = sanitizeInput(input);
        return emailRegex.test(initialClean);
    };

    const sanitizePhone = (input) => {
        const initialClean = sanitizeInput(input);
        return phoneRegex.test(initialClean);
    };


module.exports = {
    sanitizeInput,
    sanitizePhone,
    sanitizeEmail
}