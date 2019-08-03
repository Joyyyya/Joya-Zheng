import React from 'react'
import Link from 'gatsby-link'
import './Header.css'




// class Header extends React.Component{
  


  const Header =({ siteTitle }) =>(
 
      // <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="Header">
       <div className="HeaderGroup">
         <Link to="/" ><span className="header-nav-link">Joley Zheng</span></Link>
         <Link to="/">                       </Link>  
         <Link to="/">                       </Link>
         <Link to="/">                       </Link> 
         <Link to="/">                       </Link>
         <Link to="/">                       </Link>
         <Link to="/">                       </Link>  
         <Link to="/">                       </Link> 
         <Link to="/">                       </Link> 
         <Link to="/">                       </Link> 
         <Link to="/">                       </Link> 
         <Link to="/">                       </Link>
         <Link to="/">                       </Link>
         <a href="/#Card"><span className="header-nav-link">项目</span></a>
         <Link to="/jianli/" ><span className="header-nav-link">简历</span></Link>
         <Link to="/about/" ><span className="header-nav-link">关于我</span></Link>
       </div>
     </div> 
    )
  


export default Header

