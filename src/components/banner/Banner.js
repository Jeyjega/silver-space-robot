import React from 'react';
import css from './Banner.css';
import img1 from './banner3 1.png';
import img2 from './banner2 1.png';
import img3 from './banner1 1.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { useEffect, useState } from 'react';

function Banner() {
 const [ selectedimage,setSelectedImage]=useState(0);
 const [allIamges, setAllImages] = useState([img1,img2,img3])

 useEffect(()=>{
  setInterval(()=>{
    setSelectedImage(selectedimage => selectedimage <2 ? selectedimage +1:0)
  },2000)
 },[])

   return (
     <div>

    
    <img className='banner-image' src={allIamges[selectedimage]} />
    
    
    
    
</div>
    

    
    );
  }
  
  export default Banner;


      {/* <img  style={{ width: '100%', height: 400 }}  src={img1}   alt='' />
<img  style={{ width: '100%', height: 400 }}  src={img1}   alt='' />
<img  style={{ width: '100%', height: 400 }}  src={img1}   alt='' /> */}

    //   <Swiper
    //   spaceBetween={50}
    //   slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >


     
    //   <SwiperSlide><img  style={{ width: '100%', height: 400 }}  src={img1}   alt='' /></SwiperSlide>
    //   <SwiperSlide><img style={{ width: '100%', height: 400 }}  src={img2}  alt='' /></SwiperSlide>
    //   <SwiperSlide><img style={{ width: '100%', height: 400 }}  src={img3}  alt='' /></SwiperSlide>
     
    // </Swiper>