import { useState } from "react";
import "./form.css";


const FormAuth = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Передача значений полей в функцию handleClick
        handleClick(email, password);
    };

    return (

        <form onSubmit={handleFormSubmit}>
            <input
                className="first-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите почту"
            />
            <input
                className="two__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
            />
            <button className="btn__form" type="submit">
                {title}
            </button>
        </form>
    );
};

export { FormAuth };
