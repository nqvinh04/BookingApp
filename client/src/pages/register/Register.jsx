import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector} from "react-redux";
import "./register.css";


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const [showLogin, setShowLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showRegisterPass, setShowRegisterPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [signup, setSignup] = useState(true);
    const dispatch = useDispatch();

    // const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    // const checkEmail = () => {
    //     console.log('Kiem tra email')
    // }
    //
    // const checkPassword = () => {
    //     console.log('Kiem tra mk dang nhap')
    // }

    const createUser = () => {
        console.log('Dang ky tai khoan')
    }

    const renderRegisterPassword = (props) => {
        return (
            <div className="lContainer">
                <div className="header-login">
                    <h1>
                        Create password
                    </h1>
                    <div className="header-login">
                    <span>
                        Use a minimum of 10 characters, including uppercase
                        letters, lowercase letters, and numbers.
                    </span>
                    </div>
                    <div className="spacer-largest"></div>
                </div>
                <form>
                    <div className="form-login">
                        <div>
                            <label>Password</label>
                            <div>
                                <div className="form-login">
                                    <input
                                        type="text"
                                        placeholder=""
                                        id="password"
                                        onChange={(e) => setPassWord(e.target.value)}
                                        className="lInput"
                                    />
                                </div>
                            </div>
                            {error && <span>{error.message}</span>}
                        </div>

                        <div>
                            <label>Confirm password</label>
                            <div>
                                <div className="form-login">
                                    <input
                                        type="text"
                                        placeholder=""
                                        id="confirm_password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="lInput"
                                    />
                                </div>
                            </div>
                            {error && <span>{error.message}</span>}
                        </div>
                        <button
                            // disabled={loading}
                            onClick={createUser}
                            className="lButton">
                            Create account
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="login">
                <div className="login-body">
                    { !signup && renderRegisterPassword() }
                    <div className="account-access__footer">
                        <div className="u-text-center bui_font_caption portal_footer">
                            <div className="account_footer_terms footer-block">
                                <p>By signing in or creating an account,
                                    you agree with our <a
                                        href=""
                                    >
                                        Terms & conditions
                                    </a> and <a
                                        href=""
                                    >
                                        Privacy statement
                                    </a>
                                </p>
                            </div>
                            <div className="access-footer-bottom bui_font_caption footer-block">
                                <div>
                                    All rights reserved.
                                    <br/>
                                    Copyright (2006 - 2022) - Booking.com™
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;