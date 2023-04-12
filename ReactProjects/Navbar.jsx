import React from "react";

let Navbar=()=>{


 return(

  <div>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
<div class="container">
<a href="index.html" class="navbar-brand">
<i class="fa fa-plane-departure"></i> travel yari</a>
<button class="navbar-toggler" data-toggle="collapse" data-target="#travel-navbar">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="travel-navbar">
<ul class="navbar-nav ml-auto">
<li class="nav-item px-3">
	<a href="#" class="nav-link">home</a>
</li>
<li class="nav-item px-3">
	<a href="#search" class="nav-link">search</a>
</li>
<li class="nav-item px-3">
	<a href="#places" class="nav-link">visiting spots</a>
</li>
<li class="nav-item px-3">
	<a href="#gallery" class="nav-link">gallery</a>
</li>
<li class="nav-item px-3">
	<a href="#contact" class="nav-link">contact</a>
</li>
</ul>
</div>
</div>
</nav>

  </div>


 )


}

export default Navbar;