import { useEffect, useState   } from "react";
import { useParams } from "react-router-dom";

const Collections=()=>{
    let { id } = useParams();
    const [perfum , setperfum]=useState([]);
    const [filterbrand , setfilterbrand]=useState({ categorys:["dd","Dd"] , brands:[] })   
    const [brand]=useState([
        {id:1,brand_name:"addies"},
        {id:2,brand_name:"dolce  gabbana"},
        {id:3,brand_name:"diesel"},
        {id:4,brand_name:"ferrari"},
        {id:5,brand_name:"giorgio armani" },
        {id:6,brand_name:"gucci"},
        {id:6,brand_name:"boss"},
        {id:7,brand_name:"lactose"}
      ]); 

       const [byfragrance]=useState([{ 
         id:1, byfragrance_name:"citru" },
         { id:2, byfragrance_name:"dry woods"},
         { id:3, byfragrance_name:"floral" },
         { id:4, byfragrance_name:"floral oriental"},
         { id:4, byfragrance_name:"mossy woods"},
         { id:4, byfragrance_name:"soft floral"},
         { id:4, byfragrance_name:"water"},
         { id:4, byfragrance_name:"woods"},
         { id:4, byfragrance_name:"woods oriental"}

     ])
    useEffect(()=>{

        if(id==1){
        return(
             setperfum([
                {id:'1',product_img:'/static/product/product1.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },
                {id:'2',product_img:'/static/product/product2.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                {id:'3',product_img:'/static/product/product3.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                {id:'4',product_img:'/static/product/product5.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                {id:'5',product_img:'/static/product/product6.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                {id:'6',product_img:'/static/product/product7.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                {id:'7',product_img:'/static/product/product8.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                {id:'8',product_img:'/static/product/product9.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                {id:'9',product_img:'/static/product/product10.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                {id:'10',product_img:'/static/product/product11.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                {id:'11',product_img:'/static/product/product12.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                {id:'12',product_img:'/static/product/product13.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                {id:'13',product_img:'/static/product/product14.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                {id:'14',product_img:'/static/product/product15.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                {id:'16',product_img:'/static/product/product16.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                {id:'17',product_img:'/static/product/product17.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"}

            ]))

        }
            if(id==2){
                return(
                     setperfum([
                       
                        {id:'18',product_img:'/static/product/product18.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },
                        {id:'19',product_img:'/static/product/product19.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                        {id:'20',product_img:'/static/product/product20.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                        {id:'21',product_img:'/static/product/product21.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                        {id:'22',product_img:'/static/product/product22.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                        {id:'23',product_img:'/static/product/product23.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                        {id:'24',product_img:'/static/product/product24.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'25',product_img:'/static/product/product25.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'26',product_img:'/static/product/product26.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                        {id:'27',product_img:'/static/product/product27.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                        {id:'28',product_img:'/static/product/product28.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'29',product_img:'/static/product/product29.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                        {id:'29',product_img:'/static/product/product29.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'30',product_img:'/static/product/product30.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                        {id:'31',product_img:'/static/product/product31.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                        {id:'32',product_img:'/static/product/product32.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"}
        
             ]))
            }
             if(id==3){
                return(
                     setperfum([
                        {id:'33',product_img:'/static/product/product33.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },
                        {id:'34',product_img:'/static/product/product34.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                        {id:'35',product_img:'/static/product/product35.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                        {id:'36',product_img:'/static/product/product36.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                        {id:'37',product_img:'/static/product/product37.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                        {id:'38',product_img:'/static/product/product38.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                        {id:'39',product_img:'/static/product/product39.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'40',product_img:'/static/product/product40.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'41',product_img:'/static/product/product41.png' , product_name:"gucci"  , product_price:"0" , product_weight:"50"},
                        {id:'42',product_img:'/static/product/product42.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                        {id:'43',product_img:'/static/product/product43.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'44',product_img:'/static/product/product44.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                        {id:'45',product_img:'/static/product/product45.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
                        {id:'46',product_img:'/static/product/product46.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
                        {id:'47',product_img:'/static/product/product47.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                        {id:'48',product_img:'/static/product/product48.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"}
        
              ]))
           
        }
    },[id])

    // useEffect(()=>{
    
    // fetch('http://127.0.0.1:8000/addproduct')
    // .then(response => response.json())
    // .then(data =>{ setperfum(data);console.log(data)});
  
    // },[])
    console.log(filterbrand['categorys'])
    const getfilterdata=(event)=>{
       
        setfilterbrand({...filterbrand, 
                    categorys:[
                        ...filterbrand['categorys'],
                        "saidavali"]
                })
         console.log(filterbrand)
        }
    const branddata=brand.map((item , index)=>{
        return(
           <li className="text-capitalize" key={index}>
             <input className="brands" type="checkbox" value={brand[index].brand_name}  onChange={getfilterdata} />   {brand[index].brand_name}
           </li>
        )
      })
      
    const byfragrancedata=byfragrance.map((item , index)=>{
        return(
            <li className="text-capitalize" key={index}>
            <input className="categorys text-capitalize" type="checkbox" value={byfragrance[index].byfragrance_name}  onChange={getfilterdata}  /> {byfragrance[index].byfragrance_name}
          </li>
          )
    })
    
   
 const data=perfum.map((item,index)=>{
     return(

        <div className="col-xl-2 col-md-4 py-4">
        <div className="rounded"> 
        <div  className="text-center p-0 w-100 img_container_blog" >
          <img src={perfum[index].product_img} className="p-0 perfum_img w-100" style={{height:"280px"}}  alt="" />
        </div>
       <div className="text-center text-capitalize">
           <h5 className="pt-2 text-capitalize text-light"><b>{perfum[index].product_name}</b>  <small className="pl-3"> {`${perfum[index].product_weight} Ml`}</small></h5>
          <p><b>{`$ ${perfum[index].product_price} /-`}</b></p>
        </div>
        </div>                 
        </div>
     )
 })

    return(
        <section className="py-5 our_product_collections" style={{color:"#fff"}}>
            <div className="row m-0">
                <div className="col-xl-2  pl-5 pr-4 filter_container">
            
                       <p className="p-0 brand_name py-2" >Brand's</p>
                         <ul className=" w-100 m-0 p-0"> 
                         
                            <li>
                            {branddata}
                            </li>
                        </ul>

                                    
            <p className="p-0 brand_name pt-4" >By Fragrance</p>
              <ul className=" w-100 m-0 p-0"> 
              
                 <li>
                 {byfragrancedata}
                 </li>
             </ul>

              <p  className="p-0 brand_name pt-4">Luxury</p>
                      <ul className=" w-100 m-0 p-0">
                      <li className="text-capitalize"><input className="mt-2" type="checkbox" value="car collection" /> car collection  </li>
                      <li className="text-capitalize"><input className="mt-2" type="checkbox" value="celebrity" /> celebrity </li>
                      <li className="text-capitalize"><input className="mt-2" type="checkbox" value="instyle collection" />  instyle collection </li>
                </ul>
               
                <p  className="p-0 brand_name pt-4">Weight</p>
                        <ul className=" w-100 m-0 p-0">
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="50 Ml" /> 50 Ml  </li>
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="100 Ml" /> 100 Ml </li>
                </ul>   


                
            
                </div>
                    <div className="col-xl-10  ml-auto">
               <div className="row m-0">
                  {data}
                </div>
               </div>
             </div>
        </section>
    )
}

export default Collections