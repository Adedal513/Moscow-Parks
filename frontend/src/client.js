window.client = (function () {
    function getParkPolygons(success) {
        return fetch('http://127.0.0.1:8000/api/all/', {
            headers: {
                Accept: 'application/json',
            },
        }).then(checkStatus)
            .then(parseJson)
            .then(success)
    }

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);

            throw error;
        }
    }

    function parseJson(response) {
        return response.json();
    }

    return {
        getParkPolygons,
    };
}());