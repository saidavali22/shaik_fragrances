import { useState } from "react"
import axios from 'axios';
const Addproduct=()=>{
const [addproduct , setaddproduct]=useState();
const [img, setimg]=useState([]);
const formchange=(e)=>{
        console.log(e.target)
        // console.log(e.target.value)
        // setaddproduct({...addproduct},
        setaddproduct(
               { ...addproduct,
                  [e.target.name] : e.target.value
                  
                }
            )
          
    }

const formimgchange=(e)=>{
    console.log(e.target.files[0])
    setimg(e.target.files[0])
        fetch('http://127.0.0.1:8000/books/', {
      method: 'POST',
      body: setimg
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
}    

    console.log(img);
  
    return(
    <div className="w-100 bg-white py-5 shadow">
     <div className="row m-0">
       <div className="col-xl-10 mx-auto">
       <form>   
       <div className="row m-0">
       {/* product name  start */}
        <div className="col-3">
        <div class="form-group">
       <label>Product name</label>
       <input type="text" class="form-control" name="product_name" onChange={formchange} />
       </div>
       </div>
 {/* product name  end */}
 {/* product price  start */}
        <div className="col-xl-3 col-md-6">
        <div class="form-group">
        <label>Product price</label>
        <input type="number" class="form-control"  name="product_price" onChange={formchange}  />
       </div></div>
 {/* product price  end */}

 {/* product Image.  start */}
        <div className="col-xl-3 col-md-6">
        <div class="form-group">
        <label>Product Image</label>
        <input type="file" class="form-control" name="product_image" onChange={formimgchange} />
        </div></div>
{/* product Image.  end */}
{/* product Category  start */}
     <div className="col-xl-3 col-md-6">
        <div class="form-group">
      <label>Product Category</label>
      <select class="form-control" name="product_category" onChange={formchange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="kid's">kid's</option>
        </select>
       </div></div>
{/* product Category  end */}
{/* product  Quantity */}
      <div className="col-xl-3 col-md-6">
      <div class="form-group">
     <label>Product Quantity</label>
     <input type="number" class="form-control" name="product_quty" onChange={formchange} />
     </div></div>
       {/* product Quantity */}
        </div>
       <div className="py-2 mx-auto text-center">
       <button type="button" class="btn btn-success mx-2 px-4">Success</button>
       <button type="reset" class="btn btn-dark mx-2 px-4">Rest</button>
       </div>
       </form>
       </div>
     </div>
    </div>
    )
}

export default Addproduct;
