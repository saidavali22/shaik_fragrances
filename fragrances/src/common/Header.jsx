import {Link} from 'react-router-dom'
function Header(){
 return(
     <div className="text-white">
       
<div className="container-fluid">
<div className="mx-auto text-center">		
		<a href="#">
			<img src="/static/Logo/logo_shot.png" className="p-0"  alt="Instyle Fragrances" style={{width:"250px",height:"170px"}} />
		</a>
	</div>
<nav class="navbar navbar-header navbar-expand-lg">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

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