import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

export default () => {
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    const [showModal, setShowModal] = useState(false)

    const onPressLogout = async () => {
        // dispatch(logoutUser(apiData))
    }

    return {

        dispatch,
        onPressLogout,
        setShowModal,
        showModal,
        user
    }


}