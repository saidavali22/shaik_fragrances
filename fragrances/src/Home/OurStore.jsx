import { useState } from "react";
const OurStore=()=>{
    const [store]=useState([
        {
            id:1,url:"./static/store/store1.jpeg"
        },
        {
            id:2,url:"./static/store/store2.jpeg"
        },
        {
            id:3,url:"./static/store/store3.jpeg"
        },
        {
            id:4,url:"./static/store/store4.jpeg"
        },
        {
            id:5,url:"./static/store/store6.jpeg"
        },
        {
            id:6,url:"./static/store/store7.jpeg"
        },
        {
            id:7,url:"./static/store/store8.jpeg"
        },
        {
            id:8,url:"./static/store/store9.jpeg"
        },
        {
            id:9,url:"./static/store/store10.jpeg"
        }

    ])

    const bg_video_play=()=>{
       var vid = document.getElementById("video");
        // vid.play();
    //      vid.playbackRate = 2;

    //     $("#video").on(
    //       "timeupdate", 
    //       function(event){
    //           console.log(this.currentTime)
    //         //   console.log(this.duration)
    //         if(this.currentTime < 4){
    //             // alert("hii")
    //             // vid.playbackRate = 0.5;
    //             console.log("normal");
        
    //         }
         
    //   });

              vid.currentTime=3

     }
    const data=store.map((item,index)=>{
        return(
            <li className="store">
            <img src={store[index].url} alt="" style={{height:"450px"}} /> 
        </li> 
        )
    })
    return(
        <section className="pb-5">
        <div>
        <div style={{position:"relative"}}>
    <ul className="p-0">
        <li style={{listStyle:"none"}}>
        <video width="100%" id="video"  loop autoPlay muted usemap="#workmap">      
            <source src="./static/store-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </li>
         
         <li className="w-100  h-100" style={{position:"absolute" , top:"0px" ,  }}>
        
             <img src="./static/bg-imgs/video-bg1.png" alt="fragrance explore and do technologies pvt ltd" usemap="#workmap" className="w-100" style={{opacity:"0"}} />
           
             <div className=" w-100" style={{position:"absolute" ,top:"20%"}}>
                <div className="m-0  row" >
                 <h1 className="ml-auto bg-dar video_arrow text-light exlusive_collection" style={{right:"65%",top:"0%" ,position:"relative",fontSize:"80px"}}>Our Stores <i class="fas fa-circle animate__animated"></i> <i class="fas fa-circle"></i> <i class="fas fa-circle"></i></h1>
                </div>

             </div>
             
         </li>
         

            <map name="workmap">
            <area target="_blank" alt="" onClick={bg_video_play} title="Play Video"  coords="1575,438,1312,0"  shape="rect" style={{cursor:"pointer"}} />
            </map>
        
    </ul>
    <div className="w-100 storeblog">
      <div className="row m-0">
          <div className="col-xl-10 mx-auto col-md-11 ">
        
         <div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="autoplay:true ; sets:true" tabindex="-1">

<ul className="uk-slider-items store-img  uk-child-width-1-2 uk-child-width-1-5@lg uk-child-width-1-4@m  pb-5" >

    {data}




</ul>

{/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"><i className="fas fa-arrow-left"></i></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"><i className="fas fa-arrow-right"></i></a> */}

</div>


          </div>
      </div>
  </div>
  </div> 
        </div>
        </section>
    )
}
export default OurStore;