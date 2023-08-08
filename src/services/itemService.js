import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';

export const getAll = async function getAll() {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getCategory = async function getCategory() {
    try {
        const response = await axios.get(`${baseUrl}/categories`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
