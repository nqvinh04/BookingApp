import {authConstants} from "../actions/constants";

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
    console.log(1111, action)
    switch (action.type) {
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