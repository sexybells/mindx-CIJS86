import { GET } from "./network";


export async function get_product(endPoint) {
    const result = await GET(endPoint);
    return result;
}