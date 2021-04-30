import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Banner=()=>{


    return(
        // banner section start
        <section>
        <div>

        {/* <div className="uk-position-relative w-100 uk-animation-toggle uk-light" tabindex="-1" uk-slider="autoplay: true">
    <ul  className="uk-slider-items uk-child-width-1-1 w-100 uk-animation-fade uk-animation-fast">
        <li  style={{maxHeight:"450px"}}>
        <video width="100%" loop autoPlay muted>      
            <source src="./static/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </li>
        
        {data}</ul>
     <a className="uk-position-center-left ml-5" href="#" uk-slidenav-previous uk-slider-item="previous" ><i className="fas fa-arrow-left"></i></a>
     
     <a className="uk-position-center-right mr-5" href="#" uk-slidenav-next uk-slider-item="next"><i className="fas fa-arrow-right"></i></a>
    */}
   

   <Splide
       options={{
        type  : 'fade',
        rewind: true,
        autoplay:true,
        interval:3000,
        pauseOnHover:false,
        speed:2000

      }}>
  <SplideSlide>
    <img src="/static/banner/banner1.jpg" alt="fragrance explore and do technologies pvt ltd" className="banner_imgs"/>
  </SplideSlide>
  <SplideSlide>
    <img src="static/banner/banner2.jpg" alt="fragrance explore and do technologies pvt ltd" className="banner_imgs"/>
  </SplideSlide>


</Splide>

        </div>
        </section>
        // banner section end
    )
}

export default Banner;
