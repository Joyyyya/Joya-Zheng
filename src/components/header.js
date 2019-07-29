import React from 'react'
import Link from 'gatsby-link'
import './Header.css'




// class Header extends React.Component{
  


  const Header =({ siteTitle }) =>(
 
      // <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="Header">
       <div className="HeaderGroup">
         <Link to="/" ><button1>Joley Zheng</button1></Link>
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
         <a href="/#Card"><button2>项目</button2></a>
         <Link to="/jianli/" ><button3>简历</button3></Link>
         <Link to="/about/" ><button4>关于我</button4></Link>
       </div>
     </div> 
    )
  


export default Header

