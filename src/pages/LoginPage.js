import { Link } from "react-router-dom";
import { Login } from "../components/login/Login";

import "../styles/main.css";


const LoginPage = () => {


    return (



        <div className="container-transparent">

            <div className="form__block">
                <h1 className="h1-container-transparent">Авторизация</h1>
                <div className="form-auth-reg">
                    <Login />
                </div>

                <p className="p__form">Нет аккаунта? <Link to="/Register">Регистрация</Link></p>
            </div>
        </div>


    );
}

export default LoginPage;