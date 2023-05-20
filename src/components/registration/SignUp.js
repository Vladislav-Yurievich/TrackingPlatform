import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

import { Form } from "../FormReg/FormReg";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password, username, phoneNumber, record_number, group, city) => {
        const auth = getAuth();
        const firestore = getFirestore();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                // Обновление профиля пользователя с дополнительными данными
                return updateProfile(user, {
                    displayName: username,
                }).then(() => {
                    // Сохранение дополнительных данных пользователя в Firestore
                    const userDocRef = doc(firestore, "users", user.uid);
                    return setDoc(userDocRef, {
                        phoneNumber: phoneNumber,
                        record_number: record_number,
                        group: group,
                        city: city,
                    });
                }).then(() => user);
            })
            .then((user) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                navigate("/profile", { replace: true });
            })
            .catch(console.error);
    };

    return (
        <>
            <Form
                title="Зарегистрироваться"
                handleClick={handleRegister}
                navigate={navigate}
            />
        </>
    );
};
