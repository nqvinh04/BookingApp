import {authConstants, checkMailConstants} from "./constants";
import axios from "../helpers/axios";

// action check mail
export const checkMail = (email) => {
    console.log('da vao roi nha');
    return async (dispatch) => {
        dispatch({ type: checkMailConstants.CHECKMAIL_REQUEST });
        const res = await axios.post(`/checkMail`, email);

        if (res.status === 200){
            dispatch({
                type: checkMailConstants.CHECKMAIL_SUCCESS,
                payload: {

                }
            })
        }else{
            dispatch({
                type: checkMailConstants.CHECKMAIL_FAILURE,
                payload: { error: "Email khong ton tai" }
            })
        }
    }
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