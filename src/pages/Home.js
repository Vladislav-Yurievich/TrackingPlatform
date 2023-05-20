import Schedule from "../components/schedule/Schedule";

import { useSpring, animated, config } from 'react-spring';


const Home = () => {


   const componentProps = useSpring({
      opacity: 1,
      transform: 'translateY(0%)',
      from: { opacity: 0, transform: 'translateY(-100%)' },
      config: config.default
   });
   return (
      <>

         <animated.div style={componentProps}>
            {<Schedule />}
         </animated.div>

      </>
   );
}

export default Home;