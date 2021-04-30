import { useState } from "react"

const PerfumesBrand=()=>{
 const [ferfumbrand]=useState([
   {id:1,img_url:"./static/topbrands/ferfumbrand1.jpg"},
   {id:2,img_url:"./static/topbrands/ferfumbrand2.jpg"},
   {id:3,img_url:"./static/topbrands/ferfumbrand3.jpg"},
   {id:4,img_url:"./static/topbrands/ferfumbrand4.jpg"}
 ])

 const data=ferfumbrand.map((item,index)=>{
   return(
    <div className="col-xl-6 col-md-6">
    <div className="py-3 py-xl-4">
        <img className="rounded exclusive_imgs p-1" src={ferfumbrand[index].img_url} alt="fragrance explore and do technologies pvt ltd" />
    </div>
  </div>
   )
 })
    return(
       <section>
   <div className="col-xl-9 mx-auto py-5 my-xl-3">
      <div>
         <h1 className="exlusive_collection pb-5"><b className="text-light text-capitalize">exclusive collections <i class="fas fa-circle animate__animated"></i> <i class="fas fa-circle"></i> <i class="fas fa-circle"></i></b></h1>
      </div>
      <div className="row m-0">
         {data}
      </div>
   </div>
</section>

    )
}

export default PerfumesBrand