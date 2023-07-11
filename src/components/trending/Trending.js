import React from 'react';
import { useState  } from 'react';
import css from './Trending.css';
import img1 from './cooker.png';
import img2 from './jeans.png';
import img3 from './facewash.png';
import img4 from './tshirt.png';
import img5 from './iphone.png';
import img6 from './headphone.png';
import img7 from './shower.png';
import img8 from './shirt.png';
import { AiFillStar} from "react-icons/ai";
import { AiOutlineHeart} from "react-icons/ai";
import { AiTwotoneHeart} from "react-icons/ai";







function Trending() {

    const [color, setColor] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');
    const [color4, setColor4] = useState('');
    const [color5, setColor5] = useState('');
    const [color6, setColor6] = useState('');
    const [color7, setColor7] = useState('');
    const [color8, setColor8] = useState('');
  
    const changeColor1 = () => {
      const newColor = color === 'black' ? 'red' : 'black';
      setColor(newColor);
    };
    const changeColor2 = () => {
      const newColor = color2 === 'black' ? 'red' : 'black';
      setColor2(newColor);
    };
    const changeColor3 = () => {
      const newColor = color3 === 'black' ? 'red' : 'black';
      setColor3(newColor);
    };
    const changeColor4 = () => {
      const newColor = color4 === 'black' ? 'red' : 'black';
      setColor4(newColor);
    };
    const changeColor5 = () => {
      const newColor = color5 === 'black' ? 'red' : 'black';
      setColor5(newColor);
    };
    const changeColor6 = () => {
      const newColor = color6 === 'black' ? 'red' : 'black';
      setColor6(newColor);
    };
    const changeColor7 = () => {
      const newColor = color7 === 'black' ? 'red' : 'black';
      setColor7(newColor);
    };
    const changeColor8 = () => {
      const newColor = color8 === 'black' ? 'red' : 'black';
      setColor8(newColor);
    };
    // height={300} width={200} 
    return (
      <div className='trending-container'>
        <h5>Trending <span className='cont-title'>Products</span></h5>
        <div className='card-container1'>
            <div className='card1'>

            <img  src={img1}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
        
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart className='heart1' style={{ color: color }} onClick={changeColor1}>c</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
            <div className='card1'>
            <img  src={img2}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color2 }} onClick={changeColor2}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
            <div className='card1'>
            <img  src={img3}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color3 }} onClick={changeColor3}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
            <div className='card1'>
            <img  src={img4}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color4 }} onClick={changeColor4}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
        </div>
        <div className='card-container2'>
            <div className='card2'>
            <img  src={img5}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color5 }} onClick={changeColor5}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
            <div className='card2'>
            <img  src={img6}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color6 }} onClick={changeColor6}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
            <div className='card2'>
            <img  src={img7}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color7 }} onClick={changeColor7}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
            <div className='card2'>
            <img  src={img8}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price'>
            <h3 className='price'>Rs.999.00
            <AiTwotoneHeart style={{ color: color8 }} onClick={changeColor8}>click me</AiTwotoneHeart>
            </h3>
           
            </div>
            </div>
        </div>

      </div>
    );
  }
  
  export default Trending;