import {authConstants, checkMailConstants} from "../actions/constants";

const initState = {
    token: null,
    user: {
        username: "",
        email: "",
        img: ""
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
}

export default (state = initState, action) => {
    console.log(1111, action.type)
    switch (action.type) {
        case checkMailConstants.CHECKMAIL_REQUEST:
            state = {
                email: action.payload.email,
            }
            break;
        case checkMailConstants.CHECKMAIL_SUCCESS:
            state = {
                email: action.payload.email,
            }
            break;
        case checkMailConstants.CHECKMAIL_FAILURE:
            state = {
                error: action.payload.error,
            }
            break;
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            };
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            };
            break;
    }

    return state;
}