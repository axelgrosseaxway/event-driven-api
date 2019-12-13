/* Client - subscribing to the github events */
subscribe: (callback) => {
    const pollUserEvents = () => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8080/githubEvents',
            success: (data) => {
                callback(data) // process the data
            },
            complete: () => {
                pollUserEvents();
            },
            timeout: 30000
        })
    }
    pollUserEvents()
}
