import { showToast } from "../../utils/functions";
import { setCartData } from "../slices/constant-slice";

export const addCartQuantity = (cart_items, item, general_settings) => {
    return async dispatch => {
        let array = [...cart_items]
        let index = array?.findIndex(val => val?.id === item?.id)
        if (index !== -1) {
            array[index] = { ...array[index], quantity: array[index].quantity + 1 }
        } else {
            if (array?.length >= Number(general_settings?.maxCartItems)) {
                showToast("error", `You have already ${Number(general_settings?.maxCartItems)} items in cart.`)
            } else {
                array.push({ ...item, quantity: 1 })
            }
        }
        dispatch(setCartData(array))
    };
};

export const removeCartQuantity = (cart_items, item) => {
    return async dispatch => {
        let array = [...cart_items]
        let index = array?.findIndex(val => val?.id === item?.id)
        if (index !== -1) {
            if (array[index].quantity > 1) {
                array[index] = { ...array[index], quantity: array[index].quantity - 1 }
            } else {
                array.splice(index, 1)
            }
        }
        dispatch(setCartData(array))


    };
};