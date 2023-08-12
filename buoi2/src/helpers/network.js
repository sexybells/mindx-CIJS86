import axios from 'axios';

const baseUrl = 'https://5f2a4ed36ae5cc0016422391.mockapi.io/'

export async function GET(endPoint) {
    const res = await axios(baseUrl + endPoint, {
        method: 'get',
        responseType: 'json',
    });

    if (res.data !== undefined) {
        return res.data;
    }
}