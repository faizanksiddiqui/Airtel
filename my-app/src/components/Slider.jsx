import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ExternalLink } from 'react-external-link';

const spanStyle = {
  float:'left',
  alignItems: 'left',
  justifyContent: 'left',
  border:'0px solid aqua',
  color: '#000000',
  width:'52%',
  height:'300px',
  }
const divStyle = {
  float: 'right',
  backgroundSize: 'cover',
  height: '405px',
  width:'48%',
  border:'0px solid aqua',

}
const slideImages = [
  {
    
    url: '/images/hero-banner-1.png',
    text:'Wi-Fi like speeds, now on the go.',
    text1:'With Airtel 5G Plus. Up to 30x faster',
    button: 'KNOW MORE',
    link:"https://www.airtel.in/airtel-black/?icid=header&utm_source=navigation_bar",
  
  },
  {
    url: '/images/hero-banner-2.png',
    text:'Watch TV the HD way!',
    text1:'Get life-like picture quality with our HD box at ₹750',
    button: 'ORDER NOW',
    link:'https://www.airtel.in/',
  },
  {
    url: '/images/hero-banner-3.png',
    text:'Get your prepaid SIM home delivered',
    text1:'Enjoy doorstep KYC, paperless process, and quick activation',
    button: 'BUY PREPAID',
    link:'https://www.airtel.in/',
  },
  {
    url: '/images/hero-banner-4.png',
    text:'Family of 2. Or Family of 4.',
    text1:'Get Airtel Postpaid Family Plan for your special family',
    button: 'STARTING @ 599',
    link:'https://www.airtel.in/',
  },
  {
    url: '/images/hero-banner-5.jpeg',
    text:'Airtel Black is all that you need!',
    text1:'Get 1 plan-1 bill for Mobile, DTH, Fiber and 16+ OTTs',
    button: 'EXPLORE PLANS',
    link:'https://www.airtel.in/',
  },
  {
    url: '/images/hero-banner-6.png',
    text:'Pay safely, Earn rewards',
    text1:'Send money, make payments with ease on Airtel Payments Bank.',
    button: 'GET STARTED',
    link:'https://www.airtel.in/',
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              
              <div className='Left'>
                <span style={spanStyle}><h1><b>{slideImage.text}</b></h1><br></br><h3>{slideImage.text1}</h3><ExternalLink href={slideImage.link}><button><b>{slideImage.button}</b></button></ExternalLink></span>
  
              </div>
              <div className="Right">
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}></div> 
             
                
              </div>
            </div>
          ))} 
      
        </Slide>
      </div>
    )
}
        
export default Slider;