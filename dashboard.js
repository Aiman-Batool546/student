import React from 'react';


function Dashboard() {
  return (
    <>
    <div>

      <div class="dashboard">
        <nav class="sidebar">
          <div class="logo">Dashboard Logo</div>
          <ul>
            <li><a href="#"> Student</a></li>
            <li><a href="#attendence">Attendence</a></li>
            <li><a href="dashboard.js">Dashboard</a></li>
            <li><a href="#">Settings</a></li>

          </ul>
          <button><a href="navbar.js">Home</a></button>
        </nav>

        <div class="main-content">
          <header>
            <h1>Dashboard</h1>
            <div class="user-info"></div>
          </header>

          <div class="content">
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div id="#attendence">
      <div class="div">
 
      </div>
    </div>
</>

  )
};
export default Dashboard