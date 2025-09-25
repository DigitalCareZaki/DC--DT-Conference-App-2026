import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getHomeData } from "../../redux/actions/product-action"
import { updateFcm } from "../../redux/actions/auth-action"
import { getToken } from "../../utils/functions"
import { getLatestOrder } from "../../redux/actions/order-action"
import { navigate } from "../../navigation/service"
import { setOrderDetails } from "../../redux/slices/order-slice"

export default () => {
    const dispatch = useDispatch()

    const { home_data, categories, user } = useSelector(state => state.constant)
    const { latest_order } = useSelector(state => state.order)

    const updateFcmToken = async () => {
        let tokenObj = await getToken();
        if (tokenObj?.length > 0) {
            dispatch(getLatestOrder())
            dispatch(updateFcm())
        }
    }

    useFocusEffect(
        useCallback(
            () => {
                dispatch(getHomeData())
                dispatch(getCategories({ page: 1, limit: 50 }))
                updateFcmToken()
            }, []))


    const onPressOrder = () => {
        dispatch(setOrderDetails(latest_order))
        navigate("PlaceOrder", { data: latest_order, isDetail: true })
    }


    return {
        home_data,
        categories,
        user,
        latest_order,
        onPressOrder
    }

}