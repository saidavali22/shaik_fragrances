import { useEffect, useState } from "react";
const Perfumeslist=()=>{
    const [perfum , setperfum]=useState([]);
    const [perfumsecond , setperfumsecond]=useState([]);
    
    useEffect(()=>{
        return(
            
            setperfum([
                {id:'1',product_img:'/static/product/product1.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },
                {id:'2',product_img:'/static/product/product6.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                {id:'3',product_img:'/static/product/product11.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                {id:'4',product_img:'/static/product/product12.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                {id:'5',product_img:'/static/product/product13.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                // {id:'6',product_img:'/static/product/product15.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},

                // {id:'7',product_img:'/static/product/product16.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },
                // {id:'8',product_img:'/static/product/product17.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                // {id:'9',product_img:'/static/product/product18.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                // {id:'10',product_img:'/static/product/product19.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
               

            ])
        )
    },[])

    useEffect(()=>{
        return(
            
            setperfumsecond([

                {id:'6',product_img:'/static/product/product15.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},

                {id:'7',product_img:'/static/product/product16.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },
                {id:'8',product_img:'/static/product/product17.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                {id:'9',product_img:'/static/product/product18.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                {id:'10',product_img:'/static/product/product19.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
               

            ])
        )
    },[])

    // useEffect(()=>{
    
    // fetch('http://127.0.0.1:8000/addproduct')
    // .then(response => response.json())
    // .then(data =>{ setperfum(data);console.log(data)});
  
    // },[])


 const data=perfum.map((item,index)=>{
     return(

        <div className="col-xl-2 col-md-2  mx-auto  py-4 perfumlist_container ">
        <div className="rounded"> 
        <div  className="text-center  mx-auto p-0 w-100 img_container_blog" >
          <img src={perfum[index].product_img} className="p-0 perfum_img w-100" style={{height:"280px"}}  alt="" />
         
           <div className="sub_conatiner mx-auto mb-4">
             <p className="w-100 product_price"><b>$ 0/-</b></p>
             <button className="btn w-100 view_product"><b>View Product </b></button>
             
           </div>
       
        </div>
       
        
        <div className="text-center text-capitalize">
           <h5 className="pt-2 text-capitalize p"><b>{perfum[index].product_name}</b></h5>
          
        </div>
        </div>                 
        </div>
     )
 })


 const datasecond=perfumsecond.map((item,index)=>{
    return(

       <div className="col-xl-2 col-md-2  mx-auto  py-4 perfumlist_container">
       <div className="rounded"> 
       <div  className="text-center  mx-auto p-0 w-100 img_container_blog" >
         <img src={perfumsecond[index].product_img} className="p-0 perfum_img w-100" style={{height:"280px"}}  alt="" />
        
          <div className="sub_conatiner mx-auto mb-4">
            <p className="w-100 product_price"><b>$ 0/-</b></p>
            <button className="btn w-100 view_product"><b>View Product </b></button>
            
          </div>
      
       </div>
      
       
       <div className="text-center text-capitalize">
          <h5 className="pt-2 text-capitalize p"><b>{perfum[index].product_name}</b></h5>
         
       </div>
       </div>                 
       </div>
    )
})
    return(
        <div style={{position:"relative"}}>
        <section className="our_product_container effect-cls">
              <div className="pt-1">
               <div className="product_lines"></div>
               <div className="product_lines"></div>
               <div className="product_lines"></div>
             </div>  
          <div className="row m-0 py-5">
              <div className="col-xl-10  mx-auto">
               <div className="row m-0 mx-auto">
                  {data}
                </div>

                <div className="row m-0 mx-auto">
 
                  {datasecond}
                </div>

               </div>
             </div>

              <div className="pb-1">
               <div className="product_lines"></div>
               <div className="product_lines"></div>
               <div className="product_lines"></div>
             </div> 
        </section>
        </div>
      
    )
}

export default Perfumeslist;