import React from 'react'
import WeFun from '../../../assets/images/section/AboutPage/we-are-fun.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const WeAreFun = () => {
  React.useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000});
  }, []);

  return (
    <div style={{marginTop: '-60px'}}>
        <div style={{backgroundImage: `url(${WeFun})`, backgroundSize: 'cover', height: '1000px'}} className='we-fun-bg' data-aos="fade-up">
            <h1 className='we-are-fun' data-aos="fade-up">We Are <br/>Fun</h1>
        </div>
    </div>
  )
}

export default WeAreFun