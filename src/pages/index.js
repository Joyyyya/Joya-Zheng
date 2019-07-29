import React from 'react'
import Card from '../components/Card';
import Link from 'gatsby-link'



const IndexPage = () => (
  <div>
    <div className="hero">
     <div className="herogroup">
     {/* <div className="group">
     <div className="photo"> */}
     
     {/* <span className="hi">
     <img src={require('../image/Hi.png')} width="80"></img>
     </span> */}
     {/* </div>
     </div> */}
     {/* <div className="p1"> <img  src={require('../image/吉他.png')} width="40" /></div>
     <div className="p2"> <img src={require('../image/画笔.png')} width="40" /></div>
     <div className="p3"> <img  src={require('../image/坚果.png')} width="40" /></div>
     <div className="p4"> <img  src={require('../image/篮球.png')} width="40" /></div>
     <div className="p5"> <img  src={require('../image/平板.png')} width="60" /></div>
     <div className="p6"> <img  src={require('../image/球.png')} width="40" /></div>
     <div className="p7"> <img  src={require('../image/沙发.png')} width="60" /></div>
     <div className="p8"> <img  src={require('../image/书本.png')} width="50" /></div>
     <div className="p9"> <img  src={require('../image/书本2.png')} width="60" /></div>
     <div className="p10"> <img  src={require('../image/水杯.png')} width="40" /></div>
     <div className="p11"> <img  src={require('../image/星球.png')} width="40" /></div>
     <div className="p12"> <img  src={require('../image/颜料.png')} width="50" /></div>
     <div className="p13"> <img  src={require('../image/颜料盘.png')} width="40" /></div> */}

    <div className="y1"> <img  src={require('../image/紫圈.png')} width="60"/></div>
     <div className="y2"> <img src={require('../image/白圆1.png')} width="20"/></div>
     <div className="y3"> <img  src={require('../image/白圆2.png')} width="25"/></div>
     <div className="y4"> <img  src={require('../image/黄圆1.png')} width="20"/></div>
     <div className="y5"> <img  src={require('../image/黄圆2.png')} width="25"/></div>
     <div className="y6"> <img  src={require('../image/紫圆大.png')} /></div>
     <div className="y7"> <img  src={require('../image/紫圆小.png')} /></div>
     <div className="y8"> <img  src={require('../image/黄圈.png')} width="80"/></div>
 
  
    
    

      <h1>Hello, I am Joley Zheng<br /></h1>
      <p>A UX Designer</p>
      <Link to="/about/"><button>ABOUT ME</button></Link>
      <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="white">
         <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

         M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

         M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

         M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
        
        "
         />
        </path>
       </svg>
      </div>
    </div>   
  
    <div className="Cards">
      <div className="CardGroup">
      <Link to="P1"><Card 
        //  title="Design system"
         text="SenseHello 刷脸打卡动效设计"
         image={require('../image/sensehi2.png')}/></Link>
       <Link to="P2"><Card 
        //  title="React for Designers"
         text="10 sections"
         image={require('../image/watch.png')}/></Link>
        <Link to="P3"> <Card 
        //  title="Sound Design"
         text="真时科技4G手表"
         image={require('../image/watch.png')}/></Link>
         <Link to="P4"> <Card 
        //  title="ARkit 2"
         text="SenseAR开发者平台"
         image={require('../image/sensear@2x.png')}/></Link>
        <Link to="P5"> <Card 
        //  title="ARkit 2"
         text="SenseHello更新迭代"
         image={require('../image/watch.png')}/></Link>
         <Link to="P6"><Card 
        //  title="ARkit 2"
         text="时科技4G手表"
         image={require('../image/watch.png')}/></Link>
      </div>
    </div> 
    
    <div className="Footer"> ©️2019 by Joley Zheng </div>
    
  </div>
)

export default IndexPage
