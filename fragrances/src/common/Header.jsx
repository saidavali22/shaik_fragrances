import {Link} from 'react-router-dom'
function Header(){
 return(
     <div className="text-white">
       
<div className="container-fluid">

  <div className="row m-0 pt-2">
   <div className="col-xl-4">
   <i><i class="fas fa-phone-alt pl-4"></i>   +91 9876543210 </i>   <i className="pl-4"> <i class="fas fa-envelope"></i>  info@nstylefragrances.com </i> 

   </div>
   <div className="col-xl-4 mx-auto text-center">
   <a href="#">
			<img src="/static/Logo/logo_shot.png" className="p-0"  alt="Instyle Fragrances" style={{width:"250px",height:"170px"}} />
		</a>
   </div>

   <div className="col-xl-4">
   <b className="float-right pr-4 " style={{fontSize:"20px"}}>
 <i class="fab fa-instagram px-1"></i>   <i class="fab fa-linkedin-in px-1"></i> <i class="fab fa-twitter px-1"></i> <i class="fab fa-facebook-f"></i>
 </b> 
</div>
  </div>
<nav class="navbar navbar-header navbar-expand-lg text-center">

  <button className="navbar-toggler bg-white text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  

  <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">

<ul className="navbar-nav mx-auto text-light">
	<li className="nav-item nav-link"> <Link className="text-light" to='/'>Home </Link></li>
    <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Collections
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{width:"200px"}}> 
          <Link class="dropdown-item" to="/collections/1">Mens</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/collections/2">Womens</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/collections/3">Kids</Link>
        
        </div>
      </li>
	<li className="nav-item nav-link"> About </li>
    <li className="nav-item  nav-link" >Cart</li>
</ul>
  </div> 
</nav>
</div>



     </div>
 )
}
export default Header;