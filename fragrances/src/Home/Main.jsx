import AboutUs from "./AboutUs"
import Banner from "./Banner"
import BounceUp from "./BounceUp"
import FooterImgStrip from "./FooterImgStrip"
import OurStore from "./OurStore"
import PerfumesBrand from "./PerfumesBrand"
import Perfumeslist from "./Perfumeslist"
import TopBrands from "./TopBrands"
function Main(){
    return(
        <section>
         <Banner />
         <TopBrands />
         <Perfumeslist />
         <PerfumesBrand />
         <BounceUp />
         <FooterImgStrip />
         <AboutUs /> 
         <OurStore />
        
       </section>

    );
}
export default Main;