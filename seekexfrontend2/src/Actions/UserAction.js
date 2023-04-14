import axios from 'axios'

export const createUser = (name, email, dob, country) => async (dispatch) => {
    try {
        dispatch({
            type: "CreateUserRequest"
        })
        const { data } = await axios.post('/api/v1/create/user', { name, email, dob, country }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: "CreateUserSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "CreateUserFail",
            payload: error.response.data.message
        })
    }
}