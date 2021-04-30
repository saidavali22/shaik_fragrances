import {Link, Route, Switch} from 'react-router-dom'
import Addproduct from './Products/Addproduct'

const MainDash=()=>{
    return(
      <section>
          <div className="hold-transition sidebar-mini layout-fixed">
          <div className="wrapper">

<nav className="main-header navbar navbar-expand navbar-white navbar-light">

  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>

  </ul>



  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt"></i>
      </a>
    </li>

  </ul>
</nav>

<aside className="main-sidebar sidebar-dark-primary elevation-4">

  <div  class="brand-link">
 {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8" >  */}
    <span className="brand-text font-weight-light">Admin fragrances</span>
  </div>


  <div className="sidebar">

    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
    {/* <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"> */}
      </div>
      <div className="info">
        <Link href="/admin" className="d-block">fragrances</Link>
      </div>
    </div>
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

             <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-link">
                <i className="nav-icon fab fa-product-hunt"></i>
                <p>
                  Products
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="admin/order" className="nav-link">
                <i className="nav-icon fab fa-first-order-alt"></i> 
                <p>
                  Order
                </p>
              </Link>
            </li>
      </ul>
    </nav>

  </div>

</aside>


<div className="content-wrapper">
  
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>

        <div className="col-sm-6 text-right">
          <div className="pr-5">
          <Link to='/products'> <button type="button" class="btn btn-success">Primary +</button></Link> 
          </div>
        </div>
      </div>
      <div className="dropdown-divider"></div>
    </div>
  </div>


  <section className="content">
    <div className="container-fluid">
     <div className="row m-0">  
     <Switch>
         <Route path='/admin' exact>
           <div>
                dash
           </div>
         </Route>

         <Route path='/order' exact>
           <div>
               order page..
           </div>
         </Route>

         <Route path='/products' exact>
          <Addproduct />
         </Route>         
     </Switch>
     </div>  
    </div>   
  </section>

</div>

<footer className="main-footer">
  <strong>Copyright &copy;2021-2022 <a href="index.html">Fragrances</a>.</strong>
  All rights reserved.
</footer>


<aside className="control-sidebar control-sidebar-dark">
</aside>

</div>

          </div>
      </section>
    )
}
export default MainDash;