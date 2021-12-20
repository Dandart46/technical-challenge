import { axiosInstance } from "../axiosInstance";
/**
 * Servicio para listar todos los productos
 */
const listProductsService = async function (url) {
    try {
        const response = await axiosInstance({
            method: "GET",
            url,
        });
        return response;
    } catch (err) {
        err.response;
    }
};

export { listProductsService };