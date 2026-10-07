import { useState } from "react";

const useFetch = (navigate) => {

    const [gifts, setGifts] = useState([]);
    const [error, setError] = useState("");

    const getGiftSuggestions = (url, formData, path) => {

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        .then((response) => {
            return response.json().then((data) => ({
                ok: response.ok,
                data: data
            }));
        })

        .then((result) => {

            if (result.ok) {
                console.log(result.data);
                setGifts(result.data);
                setError("");

                navigate(path, {
                    state: {    
                        gifts: result.data
                    }
                });
            }
            else {
                console.log("Error:", result.data);
                setError(result.data.message || "Something went wrong");
            }

        })

        .catch((error) => {
            console.log(error);
            setError(error.message);
        });
    };

    return {
        gifts,
        error,
        getGiftSuggestions
    };
};

export default useFetch;