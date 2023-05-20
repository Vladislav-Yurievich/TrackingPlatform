import "../../styles/main.css";
import "./profile.css";

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch } from "react-redux";
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from "../../store/slices/userSlice";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const auth = getAuth();
  const user = auth.currentUser;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const firestore = getFirestore();
        const userDocRef = doc(firestore, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data());
        }
      }
    };

    fetchUserData();
  }, [user]);

  let email = '';
  let userNameMain = '';
  let phoneNumberMain = '';
  let cityMain = '';
  let groupMain = '';

  if (user !== null) {
    email = user.email;
    userNameMain = user.displayName || '';

    if (userData) {
      phoneNumberMain = userData.phoneNumber || '';
      cityMain = userData.city || '';
      groupMain = userData.group || '';
    }
  }

  const [editing, setEditing] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [group, setGroup] = useState('');



  const handleEdit = () => {
    setEditing(true);
    setPhoneNumber(userData?.phoneNumber || '');
    setCity(userData?.city || '');
    setGroup(userData?.group || '');
  };

  const handleSave = async () => {
    const firestore = getFirestore();
    const userDocRef = doc(firestore, "users", user.uid);
    await updateDoc(userDocRef, {
      phoneNumber,
      city,
      group,
    });
    setEditing(false);
  };

  const animationPropsLeft = useSpring({
    from: { opacity: 0, marginLeft: -100 },
    to: { opacity: 1, marginLeft: 0, width: '100%' },
    config: { duration: 600 },
  });

  const animationPropsRight = useSpring({
    from: { opacity: 0, marginLeft: 200 },
    to: { opacity: 1, marginLeft: 55, width: '100%' },
    config: { duration: 600 },
  });

  return isAuth ? (
    <div className="container-profile">
      <animated.div className="left__block" style={animationPropsLeft}>
        <h1 className="h1__item__box">Мой профиль</h1>
        <div className="user__date__block">
          <p className="info__user__p">ФИО: <span>{userNameMain}</span></p>
          <p className="info__user__p">Город: <span>{cityMain}</span></p>
          <p className="info__user__p">Группа: <span>{groupMain}</span></p>
          <p className="info__user__p">Зачётная книжка: <span>22-01-03189</span></p>
          <p className="info__user__p">Сотовый номер: <span>{phoneNumberMain}</span></p>
          <p className="info__user__p">Почта: <a href="mailto:accountformywork@mail.ru">{email}</a></p>
        </div>
        <div className="changes__block">
          {editing ? (
            <div className="block__form__changes">
              <h1 className="h1__light">Изменения</h1>
              <div className="form__changes">

                <input
                  className="input__form"
                  type="text"
                  value={phoneNumber}
                  placeholder="Введите номер телефона"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <input
                  className="input__form"
                  type="text"
                  value={city}
                  placeholder="Введите город"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />

                <input
                  className="input__form"
                  type="text"
                  value={group}
                  placeholder="Введите группу"
                  onChange={(e) => setGroup(e.target.value)}
                  required
                />
                <button type="submit" name="submit" className="btn__save" onClick={handleSave}>
                  Сохранить
                </button>
                <button
                  type="submit"
                  name="submit"
                  className="btn__save btn__exit"
                  onClick={() => dispatch(removeUser())} // Add parentheses to invoke the action
                >
                  Выйти
                </button>
              </div>
            </div>
          ) : (
            <>
              <button className="btn__save" onClick={handleEdit}>
                Изменить
              </button>
            </>
          )}
        </div>
      </animated.div>

      <animated.div className="right__blocks" style={animationPropsRight}>
        <div className="right__block__profile">
          <h1 className="h1__item__box">Статистика</h1>
        </div>
        <div className="right__block__profile">
          <h1 className="h1__item__box">Мой профиль</h1>
        </div>
      </animated.div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Profile;
