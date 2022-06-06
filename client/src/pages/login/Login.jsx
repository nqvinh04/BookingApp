import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import Facebook from "../../images/logo/facebook.png";
import Google from "../../images/logo/search.png";
import Phone from "../../images/logo/smartphone.png";
import "./login.css";

const checkPassword = (props) => {

}

const checkRegisterPass = (props) => {

}


const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showRegisterPass, setShowRegisterPass] = useState(false);

    const { loading, error, dispatch } = useContext(AuthContext);

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


    return (
        <div>
            <Navbar />
            <div className="login">
                <div className="login-body">
                    <div className="lContainer">
                        <div className="header-login">
                            <h1>
                                Sign in or create an account
                            </h1>
                            <div className="spacer-largest"></div>
                        </div>
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
                        <div className="header-login">
                            <h1>
                                Enter your password
                            </h1>
                            <div className="header-login">
                                <span>
                                    Enter your Booking.com password for testlaptrinh04@gmail.com.
                                </span>
                            </div>
                            <div className="spacer-largest"></div>
                        </div>

                        <form>
                            <div className="form-login">
                                <div>
                                    <label>Email address</label>
                                    <div>
                                        <div className="form-login">
                                            <input
                                                type="text"
                                                placeholder="username"
                                                id="username"
                                                onChange={handleChange}
                                                className="lInput"
                                            />
                                            <div>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    {error && <span>{error.message}</span>}
                                </div>

                                <div>
                                    <label>Password</label>
                                    <div>
                                        <div className="form-login">
                                            <input
                                                type="text"
                                                placeholder=""
                                                id="password"
                                                onChange={handleChange}
                                                className="lInput"
                                            />
                                            <div>
                                                <span></span>
                                                <span></span>
                                            </div>
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
                                                onChange={handleChange}
                                                className="lInput"
                                            />
                                            <div>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    {error && <span>{error.message}</span>}
                                </div>

                                <button disabled={loading} onClick={handleClick} className="lButton">
                                    Continue with email
                                </button>
                                <button disabled={loading} onClick={handleClick} className="lButton">
                                    Create account
                                </button>
                                <button disabled={loading} onClick={handleClick} className="lButton">
                                    Login
                                </button>
                                {/*{error && <span>{error.message}</span>}*/}
                            </div>
                        </form>
                        <div className="access-panel_social">
                            <div className="access-panel_social-divider">
                                <div className="access-panel_social-divider-line"></div>
                                <span className="access-panel_social-divider-text">
                                    or use one of these options
                                </span>
                                <div className="access-panel_social-divider-line"></div>
                            </div>
                            <div className="access-panel__social-buttons">
                                <a className="access-panel__social-button"
                                   href="https://www.facebook.com/login.php?skip_api_login=1&api_key=210068525731476&kid_directed_site=0&app_id=210068525731476&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.0%2Fdialog%2Foauth%3Fdisplay%3Dpopup%26redirect_uri%3Dhttps%253A%252F%252Faccount.booking.com%252Fsocial%252Fresult%252Ffacebook%26response_type%3Dcode%26client_id%3D210068525731476%26state%3DEgVvYXV0aCLdAwoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4q_AJVcG9DT19iV2lCWWgzSXFBYTA0ZUxVYnhWRGQ2MjQ2Q3RiMU1LUGxZOTJZUDNoMnl0N1h1Y0MzeHNPUXFZSEEwY1lwQkJyQWUzVWF5US1rOUM3SHNYelNTektHRzF4clYwVmY5UTlfWWVsZEtYbG1mY2pORkpuV0ZXZ1hrUTV2NjNXV3owY2ZhU1k3UVI0RUlpS0JPY0tia3hhZHBqYktZMlNnQ2pMcTJ2N0J0WHFiQnpmbVdtOEgtLWdIZWVNeFB2cXc0SkRiMTIyVE8xSUVkNVZmMU9CRkg1UU1nc21EQ29VcFdDM3NGaTVlRFdKaTl4U3pYdTJnWkxQMFhMem5FOTVOdm1xWERBTzVkTlFTRDV1dkNiRjVRWjlLVVdqS2VkVi1hdXZrZDBfQWdISm5PU2JZY1JlVkVyNGJBTFpqUTRGWmo5d1lYS1FIS1ZNd1dTYUJ6T044akplbWVBcHZDdnNHTFRqQTBwTlFtcG0zdVlacXItZGVJcHczd0IEY29kZSoWCNv8ZzCT1MOjz80lOgBCAFj43NKUBg%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dee11a629-d91d-40f6-8d27-db2632bde000%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccount.booking.com%2Fsocial%2Fresult%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DEgVvYXV0aCLdAwoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4q_AJVcG9DT19iV2lCWWgzSXFBYTA0ZUxVYnhWRGQ2MjQ2Q3RiMU1LUGxZOTJZUDNoMnl0N1h1Y0MzeHNPUXFZSEEwY1lwQkJyQWUzVWF5US1rOUM3SHNYelNTektHRzF4clYwVmY5UTlfWWVsZEtYbG1mY2pORkpuV0ZXZ1hrUTV2NjNXV3owY2ZhU1k3UVI0RUlpS0JPY0tia3hhZHBqYktZMlNnQ2pMcTJ2N0J0WHFiQnpmbVdtOEgtLWdIZWVNeFB2cXc0SkRiMTIyVE8xSUVkNVZmMU9CRkg1UU1nc21EQ29VcFdDM3NGaTVlRFdKaTl4U3pYdTJnWkxQMFhMem5FOTVOdm1xWERBTzVkTlFTRDV1dkNiRjVRWjlLVVdqS2VkVi1hdXZrZDBfQWdISm5PU2JZY1JlVkVyNGJBTFpqUTRGWmo5d1lYS1FIS1ZNd1dTYUJ6T044akplbWVBcHZDdnNHTFRqQTBwTlFtcG0zdVlacXItZGVJcHczd0IEY29kZSoWCNv8ZzCT1MOjz80lOgBCAFj43NKUBg%23_%3D_&display=popup&locale=vi_VN&pl_dbl=0">
                                    <div className="access-panel__social-button-content">
                                        <div className="access-panel__social-button-image">
                                            <img src={Facebook} alt={'Facebook'}
                                                 style={{ width: '30px', height: '30px'}}/>
                                        </div>
                                    </div>
                                </a>
                                <a className="access-panel__social-button"
                                   href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=online&response_type=code&redirect_uri=https%3A%2F%2Faccount.booking.com%2Fsocial%2Fresult%2Fgoogle&client_id=901905703382-m88jn1h9ll89odkt6t5muc6h7ep83rlh.apps.googleusercontent.com&scope=email%20profile&state=EgVvYXV0aCLdAwoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4q_AJVcG9DT19iV2lCWWgzSXFBYTA0ZUxVYnhWRGQ2MjQ2Q3RiMU1LUGxZOTJZUDNoMnl0N1h1Y0MzeHNPUXFZSEEwY1lwQkJyQWUzVWF5US1rOUM3SHNYelNTektHRzF4clYwVmY5UTlfWWVsZEtYbG1mY2pORkpuV0ZXZ1hrUTV2NjNXV3owY2ZhU1k3UVI0RUlpS0JPY0tia3hhZHBqYktZMlNnQ2pMcTJ2N0J0WHFiQnpmbVdtOEgtLWdIZWVNeFB2cXc0SkRiMTIyVE8xSUVkNVZmMU9CRkg1UU1nc21EQ29VcFdDM3NGaTVlRFdKaTl4U3pYdTJnWkxQMFhMem5FOTVOdm1xWERBTzVkTlFTRDV1dkNiRjVRWjlLVVdqS2VkVi1hdXZrZDBfQWdISm5PU2JZY1JlVkVyNGJBTFpqUTRGWmo5d1lYS1FIS1ZNd1dTYUJ6T044akplbWVBcHZDdnNHTFRqQTBwTlFtcG0zdVlacXItZGVJcHczd0IEY29kZSoWCNv8ZzCT1MOjz80lOgBCAFj43NKUBg&flowName=GeneralOAuthFlow">
                                    <div className="access-panel__social-button-content">
                                        <div className="access-panel__social-button-image">
                                            <img src={Google} alt={'Google'}
                                                 style={{ width: '30px', height: '30px'}}/>
                                        </div>
                                    </div>
                                </a>
                                <a className="access-panel__social-button"
                                   href="">
                                    <div className="access-panel__social-button-content">
                                        <div className="access-panel__social-button-image">
                                            <img src={Phone} alt={'Phone'}
                                                 style={{ width: '30px', height: '30px'}}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="u-text-center social-expand-link">
                                <button disabled={loading} onClick={handleClick} className="bui-button-link bui_font_strong">
                                    More ways to sign in
                                </button>
                            </div>
                        </div>
                    </div>
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