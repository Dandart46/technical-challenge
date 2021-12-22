import { axiosInstance } from "../axiosInstance";
/**
 * Servicio para cambiar el stock de un producto
 */
const changeProductStockService = async function (url, newStock) {
    try {
        const response = await axiosInstance({
            method: "PATCH",
            url,
            data: {
                'stock': newStock
            }
        });
        return response;
    } catch (err) {
        err.response;
    }
};

export { changeProductStockService };