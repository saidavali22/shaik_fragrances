import { useState } from "react";

const FooterImgStrip=()=>{
    const [Imges]=useState([
        {id:0,Img_url:"./static/socialmedia/instagram1.png"},
        {id:1,Img_url:"./static/socialmedia/instagram2.png"},
        {id:1,Img_url:"./static/socialmedia/instagram3.png"},
        {id:1,Img_url:"./static/socialmedia/instagram4.png"}
    ]);

    const data=Imges.map((item , index)=>{
       return(
        <div className="col-xl-3 col-md-6 py-4">
        <div>

        <div className="container">
           <img src={Imges[index].Img_url} alt="Avatar" class="image w-100"  />
           <div className="middle">
           <div className="text"> <a  href="#"><i class="fab fa-facebook-f px-3" ></i> </a> <a href="#" ><i class="fab fa-twitter twitter"></i> </a> </div>
           </div>
        </div>
        </div>

     </div>
       )
    })
    return(
        <section>
            <div className="row m-0">
               <div className="col-xl-11 mx-auto mt-5 py-5">
               <div>
                   <h1><b className="text-light text-capitalize py-5 exlusive_collection">our social media channels <i class="fas fa-circle animate__animated"></i> <i class="fas fa-circle"></i> <i class="fas fa-circle"></i></b></h1>
              </div>
                   <div className="row m-0 pb-5">
                        {data}
                 </div>

                </div>  
            </div>


        </section>
    )
}
export default FooterImgStrip;