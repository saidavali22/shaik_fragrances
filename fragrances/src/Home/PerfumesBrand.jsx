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
    <div className="col-xl-6   p-5  col-md-6">
    <div className="p-0 text-center">
        <img className="rounded exclusive_imgs p-1 bg-light" src={ferfumbrand[index].img_url} alt="fragrance explore and do technologies pvt ltd" />
    </div>
  </div>
   )
 })
    return(
       <section>
<div className="row m-0">          
   <div className="col-xl-9  p-0 mx-auto  my-xl-3" >
      <div>
         <h1 className="exlusive_collection pt-5"><b className="text-light text-capitalize">exclusive collections <i class="fas fa-circle animate__animated"></i> <i class="fas fa-circle"></i> <i class="fas fa-circle"></i></b></h1>
      </div>
      <div className="row m-0 exclusive_border p-1">
      <div className="row m-0 exclusive_border">
         {data}
      </div>
      </div>
   </div>
   </div>
</section>

    )
}

export default PerfumesBrand