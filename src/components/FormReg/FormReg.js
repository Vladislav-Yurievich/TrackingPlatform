import { useState } from "react";
import "./form.css";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [record_number, setRecordNumber] = useState("");
    const [group, setGroup] = useState("");
    const [city, setCity] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Передача значений полей в функцию handleClick
        handleClick(email, password, username, phoneNumber, record_number, group, city);
    };


    return (
        <form onSubmit={handleFormSubmit}>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите ФИО"
            />

            <input
                className="first-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите почту"
            />

            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Введите номер телефона"
            />

            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Введите город"
            />

            <input
                type="text"
                value={record_number}
                onChange={(e) => setRecordNumber(e.target.value)}
                placeholder="Введите номер зачётной книги"
            />

            <input
                type="text"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                placeholder="Введите группу, в которой обучаетесь"
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

export { Form };
