// this file contains all api for this project
import axios from "axios";

const Base_URL = "https://youtube138.p.rapidapi.com";
const API_Key = "3ed82a7485msh4f9428d5ff65e12p1075a7jsn681658363d02";

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'x-rapidapi-key': API_Key,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${Base_URL}/${url}`, options);
        return data?.contents;
    } catch (err) {
        console.error("Error occurred", err);
    }
}