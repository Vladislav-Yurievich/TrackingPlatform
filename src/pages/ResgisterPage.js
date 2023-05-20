import { Link } from "react-router-dom";
import { SignUp } from "../components/registration/SignUp";

import "../styles/main.css";

const RegisterPage = () => {
    return (
        <div className="container-transparent">

            <div className="form__block">
                <h1 className="h1-container-transparent">Регистрация аккаунта</h1>
                <div className="form-auth-reg">
                    <SignUp />
                    <p className="p__form">Есть аккаунт? <Link to="/login">Авторизоваться</Link></p>
                </div>
            </div>

        </div>


    );
}

export default RegisterPage;