import React, { useState, useEffect } from 'react';
import './SmileEmoji.css';

const Smiley = () => {
   const [isWinking, setWinking] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setWinking((prevIsWinking) => !prevIsWinking);
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, []);

   return (
      <div className="smiley">
         <div className={`face ${isWinking ? 'wink' : ''}`}>
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="mouth"></div>
         </div>
      </div>
   );
};

export default Smiley;
