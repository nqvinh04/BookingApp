import {authConstants} from "./constants";
import axios from "../helpers/axios";

// action check mail
export const checkMail = () => {

}

// action login
export const login = (user) => {
    console.log(2222, user)
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/auth/login`, {
            ...user,
        });

        if (res.status === 200){
            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                },
            });
        }else{
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error },
                });
            }
        }
    };
};