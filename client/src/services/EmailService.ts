const EmailService = {
    requestEstimate: async (message: Object) => {
        return fetch('http://localhost:5005' + `/send`, {
            credentials: "include",
            method: "POST",
            headers: new Headers({ "Content-Type" : "application/json"}),
            body: JSON.stringify({ message })
        }).then(response => response.json())
    }
}

export default EmailService;