import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div  class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto pl-5 mb-2 mb-lg-0">
       
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><Link   to="/Student" style={{color:"black",textDecoration:"none"}}>Student</Link></a>          
        </li>

        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><Link   to="/Course" style={{color:"black",textDecoration:"none"}}>Course</Link></a>          
        </li>

        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><Link   to="/Attendence" style={{color:"black",textDecoration:"none"}}>Attendence</Link></a>          
        </li>


        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><Link   to="/Dashboard" style={{color:"black",textDecoration:"none"}}>Dashboard</Link></a>          
        </li>
       

          
      
      </ul>
      
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar
