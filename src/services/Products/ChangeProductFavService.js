import { axiosInstance } from "../axiosInstance";
/**
 * Servicio para cambiar el stock de un producto
 */
const changeProductFavService = async function (url, fav) {
    try {
        const response = await axiosInstance({
            method: "PATCH",
            url,
            data: {
                'favorite': fav
            }
        });
        return response;
    } catch (err) {
        err.response;
    }
};

export { changeProductFavService };