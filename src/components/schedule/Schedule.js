import './schedule.css';
import './DataPicker.css';
import 'react-calendar/dist/Calendar.css';
import calendar from '../../img/icons/calendar.svg';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import DropdownButton from '../dropdownbtn/DropDownButton';


const Schedule = () => {

   useEffect(() => {
      const buttons = document.querySelectorAll('.btn__functional__panel.period');

      buttons.forEach((button) => {
         button.addEventListener('click', () => {
            // удаляю класс active у всех кнопок
            buttons.forEach((btn) => {
               btn.classList.remove('active');
            });

            // добавляю класс active на нажатую кнопку
            button.classList.add('active');
         });
      });

      return () => {
         buttons.forEach((button) => {
            button.removeEventListener('click', () => { });
         });
      };
   }, []);

   const [value, onChange] = useState(new Date()); // for DatePicker

   return (

      <section className="section__schedule">

         <div className="schedule__block">

            <div className="functional__panel">
               <div className="select_period">
                  <button type='button' className='btn__functional__panel period'>Сегодня</button>
                  <button type='button' className='btn__functional__panel period active'>Неделя</button>
                  <button type='button' className='btn__functional__panel period'>Месяц</button>
                  <button type='button' className='btn__functional__panel period'>Год</button>
               </div>

               <div className="date__block">
                  <div className="calendar__block">
                     <DatePicker onChange={onChange} value={value} />
                  </div>
               </div>

               <DropdownButton />

               <div className="right__block">
                  <button type='button' className='btn__download'></button>

                  <div className="split__block">
                     <button type='button' className='btn__functional__panel split-up'></button>
                     <button type='button' className='btn__functional__panel split-burger'></button>
                  </div>
               </div>

            </div>

            <div className="schedule__component__block">
               <div className="top__function__block">
                  <div className="info__block">
                     <img src={calendar} alt="calendar" />
                     <p className='p__date'>15 - 21 мая 2023 г.</p>
                  </div>
               </div>

               <div className='view__container'>
                  <table className="table">
                     <tbody>

                        <tr className='tr__week'>
                           <td><span className='span__date count__week'>Нед. 3</span></td>
                           <td><span className='span__date'>пн. 15.05</span></td>
                           <td><span className='span__date'>вт. 16.05</span></td>
                           <td><span className='span__date'>ср. 17.05</span></td>
                           <td><span className='span__date'>чт. 18.05</span></td>
                           <td><span className='span__date'>пт. 19.05</span></td>
                           <td><span className='span__date'>сб. 20.05</span></td>
                           <td><span className='span__date'>вс. 21.05</span></td>

                        </tr>

                        <tr>
                           <td className="info__time">1 ПАРА <div className="time__clas__block"><span className='span__time'>08:00 <br /> 09:35</span></div></td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">8:00 - 9:35</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__warning'>
                              <p className="p__time">8:00 - 9:35</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">8:00 - 9:35</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">8:00 - 9:35</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__warning'>
                              <p className="p__time">8:00 - 9:35</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__warning'>
                              <p className="p__time">8:00 - 9:35</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule '></td>
                        </tr>


                        <tr>
                           <td className="info__time">2 ПАРА <div className="time__clas__block"><span className='span__time'>09:45 <br /> 11:20</span></div></td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">9:45 - 11:20</p>
                              <p className="p__location">Учебный корпус №3 / 526(УК-03)</p>
                              <p className="p__item__name">Математический анализ</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">9:45 - 11:20</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__warning'>
                              <p className="p__time">9:45 - 11:20</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">9:45 - 11:20</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">9:45 - 11:20</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__warning'>
                              <p className="p__time">9:45 - 11:20</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule '></td>
                        </tr>


                        <tr>
                           <td className="info__time">3 ПАРА <div className="time__clas__block"><span className='span__time'>11:30 <br /> 13:05</span></div></td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                        </tr>


                        <tr>
                           <td className="info__time">4 ПАРА <div className="time__clas__block"><span className='span__time'>13:45 <br /> 15:20</span></div></td>
                           <td className='info__block__schedule light__warning'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule light__green'>
                              <p className="p__time">11:30 - 13:05</p>
                              <p className="p__location">Учебный корпус №7 / 310(УК-07)</p>
                              <p className="p__item__name">Программирование</p>
                           </td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                        </tr>


                        <tr>
                           <td className="info__time">5 ПАРА <div className="time__clas__block"><span className='span__time'>15:30 <br /> 17:05</span></div></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                        </tr>


                        <tr>
                           <td className="info__time">6 ПАРА <div className="time__clas__block"><span className='span__time'>17:15 <br /> 18:50</span></div></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                        </tr>


                        <tr>
                           <td className="info__time">7 ПАРА <div className="time__clas__block"><span className='span__time'>19:00 <br /> 20:35</span></div></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                           <td className='info__block__schedule '></td>
                        </tr>


                     </tbody>
                  </table>
               </div>
            </div>
         </div>

      </section>

   );

}


export default Schedule;