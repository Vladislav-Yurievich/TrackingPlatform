import "./navbar.css";
import { NavLink } from "react-router-dom";

import logo from '../../img/logo.svg';
import person from '../../img/icons/person.svg';
import attendance from '../../img/icons/graph-up.svg';
import rating from '../../img/icons/rating.svg';
import blank from '../../img/icons/blank.svg';
import calendar from '../../img/icons/calendar-navbar.svg';
import settings from '../../img/icons/settings.svg';
import security from '../../img/icons/grommet-icons_shield-security.svg';

// import appearance from '../../img/icons/appearance.svg';

import personWhite from '../../img/white-icons/person.svg';
import attendanceWhite from '../../img/white-icons/graph-up.svg';
import ratingWhite from '../../img/white-icons/rating.svg';
import blankWhite from '../../img/white-icons/blank.svg';
import calendarWhite from '../../img/white-icons/calendar.svg';
import securityWhite from '../../img/white-icons/security.svg';
import settingsWhite from '../../img/white-icons/settings.svg';


const Navbar = () => {

   return (

      <nav className="sidebar">

         <header className="header-sidebar">
            <NavLink to="/">
               <img src={logo} alt="logo" />
            </NavLink>

            <NavLink to="/">
               <span className="span-logo">Tracking Platform</span>
            </NavLink>
         </header>

         <div className="menu">
            <div className="menu__item">
               <input type="checkbox" className="menu__input" id="menu__1" />
               <label htmlFor="menu__1" className="menu__title">Основные </label>

               <div className="menu-open-block">
                  <ul className="menu__list">

                     <li className="menu__list__li">
                        <NavLink to="/profile" className="menu__list__link">
                           <img src={person} alt="person" className="icon-menu icon-main" /> <img src={personWhite} alt="personWhtie" className="icon-menu icon-white" />Профиль
                        </NavLink>
                     </li>

                     <li className="menu__list__li">
                        <NavLink to="/" className="menu__list__link">
                           <img src={attendance} alt="attendance" className="icon-menu icon-main" /><img src={attendanceWhite} alt="personWhtie" className="icon-menu icon-white" />Посещаемость
                        </NavLink>
                     </li>

                     <li className="menu__list__li">
                        <NavLink to="/rating" className="menu__list__link">
                           <img src={rating} alt="rating" className="icon-menu icon-main" /><img src={ratingWhite} alt="personWhtie" className="icon-menu icon-white" />Рейтинговая система
                        </NavLink>
                     </li>

                     <li className="menu__list__li">
                        <NavLink to="/pass-log" className="menu__list__link">
                           <img src={blank} alt="blank" className="icon-menu icon-main" /><img src={blankWhite} alt="personWhtie" className="icon-menu icon-white" />Журнал пропусков
                        </NavLink>
                     </li>

                     <li className="menu__list__li">
                        <NavLink to="/calendar" className="menu__list__link">
                           <img src={calendar} alt="calendar" className="icon-menu icon-main" /><img src={calendarWhite} alt="personWhtie" className="icon-menu icon-white" />Календарь
                        </NavLink>
                     </li>

                  </ul>
               </div>
            </div>

            <div className="hr__block"></div>

            <div className="menu__item">
               <input type="checkbox" className="menu__input" id="menu__2" />
               <label htmlFor="menu__2" className="menu__title">Настройки</label>

               <div className="menu-open-block">
                  <ul className="menu__list">

                     <li className="menu__list__li">
                        <NavLink to="/settings" className="menu__list__link">
                           <img src={settings} alt="settings" className="icon-menu icon-main" /><img src={settingsWhite} alt="personWhtie" className="icon-menu icon-white" />Настройки
                        </NavLink>
                     </li>

                     <li className="menu__list__li">
                        <NavLink to="/settings-account" className="menu__list__link">
                           <img src={person} alt="person" className="icon-menu icon-main" /><img src={personWhite} alt="personWhtie" className="icon-menu icon-white" />Аккаунт
                        </NavLink>
                     </li>

                     <li className="menu__list__li">
                        <NavLink to="/security" className="menu__list__link">
                           <img src={security} alt="security" className="icon-menu icon-main" /><img src={securityWhite} alt="personWhtie" className="icon-menu icon-white" />Безопасность
                        </NavLink>
                     </li>

                     {/* <li className="menu__list__li">
                        <NavLink to="/" className="menu__list__link">
                           <img src={appearance} alt="appearance" className="icon-menu" />Внешний вид сайта
                        </NavLink>
                     </li> */}

                  </ul>

               </div>

            </div>
         </div>
      </nav>

   );
}

export default Navbar;