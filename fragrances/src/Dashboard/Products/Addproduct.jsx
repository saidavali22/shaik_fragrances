  import { useEffect, useState } from "react"
const Addproduct=()=>{
// const [Getproduct , SetGetproduct]=useState([])
  const [addproduct , setaddproduct]=useState([{"product_name": "","product_price": "","product_category": "Male","product_size": "",}]);
const [product_img, setproduct_img]=useState();
const formchange=(e)=>{ setaddproduct({ ...addproduct,
                   [e.target.name] : e.target.value
                  })}

const formsubmit=(e)=>{
  e.preventDefault()
  const uploadData = new FormData();
 for(var key in addproduct[0]){
    uploadData.append(key , addproduct[key])
   }
  //  uploadData.append('product_name' , "dddd")

  uploadData.append('product_img', product_img, product_img.name);
  fetch('http://127.0.0.1:8000/addproduct', {
    method: 'POST',
    body: uploadData
  })
  .then( res => { alert("Product added sucess.."); console.log(res)
   
  // fetch('http://127.0.0.1:8000/upload')
  // .then(response => response.json())
  // .then(data => console.log(data));
  })
  .catch(error => console.log(error))
  e.target.reset();
}



    return(
    <div className="w-100 bg-white py-5 shadow">
     <div className="row m-0">
       <div className="col-xl-10 mx-auto">
       <form method="post" onSubmit={formsubmit}>   
       <div className="row m-0">
       {/* product name  start */}
        <div className="col-3">
        <div class="form-group">
       <label>Product name</label>
       <input required type="text" class="form-control" name="product_name" onChange={formchange} />
       </div>
       </div>
 {/* product name  end */}
 {/* product price  start */}
        <div className="col-xl-3 col-md-6">
        <div class="form-group">
        <label>Product price</label>
        <input required type="number" class="form-control"  name="product_price" onChange={formchange}  />
       </div></div>
 {/* product price  end */}

 {/* product Image.  start */}
        <div className="col-xl-3 col-md-6">
        <div class="form-group">
        <label>Product Image</label>
        <input required type="file" class="form-control" name="product_img" onChange={(evt) => setproduct_img(evt.target.files[0])} />
        </div></div>
{/* product Image.  end */}
{/* product Category  start */}
     <div className="col-xl-3 col-md-6">
        <div class="form-group">
      <label>Product Category</label>
      <select required  class="form-control" name="product_category" onChange={formchange} >
      <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
        <option value="Male" defaultValue>Male</option>
        <option value="Female">Female</option>
        <option value="kid's">kid's</option>
        </select>
       </div></div>
{/* product Category  end */}
{/* product  Quantity */}
      <div className="col-xl-3 col-md-6">
      <div class="form-group">
     <label>Product Quantity</label>
     <input required type="number" class="form-control" name="product_size" onChange={formchange} />
     </div></div>
       {/* product Quantity */}
        </div>
       <div className="py-2 mx-auto text-center">
       <button type="submit" class="btn btn-success mx-2 px-4">Success</button>
       <button type="reset" class="btn btn-dark mx-2 px-4">Rest</button>
       </div>
       </form>
       </div>
     </div>
    </div>
    )
}

export default Addproduct;
