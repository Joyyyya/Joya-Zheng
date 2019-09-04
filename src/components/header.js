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
         <a href="https://join.qq.com/upload/resume_file/190904/dfe598b3b76d2a6cec3713e5668eb730.pdf" target="_blank"><span className="header-nav-link">简历</span></a>
         <a href="http://www.woshipm.com/u/823776" target="_blank"><span className="header-nav-link">文章</span></a>
       </div>
     </div> 
    )
  


export default Header

