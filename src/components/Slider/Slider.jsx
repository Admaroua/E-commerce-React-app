
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/E-commerce-Chatbots.png';
import img2 from '../../assets/customer-experience.jpg';



const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear"
  };
  

  return (
    
    <Slider {...settings} className='container mx-auto mt-20'>
      <div >
        <img src={img1} alt="Slide 1" className='w-full h-[500px]' />
      </div>
      <div>
        <img src={img2} alt="Slide 2" className='w-full h-[500px]' />
      </div>
      
    </Slider>
    
  );
};

export default Carousel;
