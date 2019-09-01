import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar';
import LazyImg from '../components/LazyImg';
import Animate from '../components/Animate';
import './p4.css'

const anchors = [{ 
  id: '41', label: '简介'
}, {
  id: '42', label: '需求分析',
}, {
  id: '420', label: null
}, {
  id: '43', label: '用户调研'
}, {
  id: '430', label: null
},{
  id: '44', label: '设计方案'
}, {
  id: '440', label: null
}, {
  id: '45', label: '总结反思'
}, {
  id: '450', label: null
}];

const triggerSelectors = [
  '.简介4', 
  '.需求分析1', '.需求分析2', 
  '.用户调研', 
  '.设计方案1', '.设计方案2','.设计方案21','.设计方案3', '.设计方案31','.设计方案4','.设计方案41','.设计方案5', '.设计方案51', '.设计方案6','.设计方案61',
  '.反思总结41', '.反思总结42'
]; 

const p4 = () => (
  <div>
  <Sidebar anchors={anchors}/>
  <Animate triggerSelectors={triggerSelectors}/>

  <div className="content4">
    <a name="41"></a> <h1>SenseAR 开发者平台网站</h1>
    <div className="简介4" id="41">
      <LazyImg src={require('../image/开发者网站简介.png')} width="421px" height="264px"/>
      <p id="简介4">简介</p>
      <p id="简介内容4">SenseAR 开发者平台网站为当前的合作伙伴提供方便正规的SDK更新和开发指引，同时也是为了给潜在的合作伙伴提供了解SenseAR的门户介绍。在该项目中，我负责网站的交互设计，通过用户调研了解用户行为，整合设计目标和用户行为完成交互原型。设计完成后，我总结了网页设计的控件规范，建立自己的网页控件库。</p>
      <p id="时间4">时间</p>
      <p id="时间内容4">2019/02-2019/05</p>
      <p id="角色和工作4">角色和工作</p>
      <a name="42"></a><p id="角色和工作内容4">交互设计师负责网页交互设计</p>
    </div>
    <div className="需求分析">
      <div className="需求分析1"><h1>01</h1>
      <h2 id="42">需求分析</h2>
      <LazyImg  src={require('../image/网站需求分析1.png')} width="950px" height="307px"/></div>
      <div className="需求分析2"><LazyImg  src={require('../image/需求分析2.png')} width="950px" height="249px"/></div>
      <div style={{position: 'relative', left:'100px'}}>
        <div id="420"></div>
      </div>
    </div>
   
    <div className="用户调研">
    <a name="43"></a><h1>02</h1>
      <h2 id="43">用户调研</h2>
      <p id="用户调研1">由于我对开发者平台的使用并不熟悉，我找到公司的开发人员，通过了解观察开发人员使用开发者平台的习惯，得出一些基础的结论：</p>
      <h3>调研结果</h3>
      <p id="用户调研2">1、开发者在选择平台时关注哪些因素，为什么选择某个平台？使用该平台的目的是什么？<br / >有明确的目的，因为某个平台有他们需要的技术。为了完成开发支持项目。<br / >→  结论：需要展现平台可以实现的技术<br / ><br / >2、如何使用平台，步骤是什么？<br / >一般先看开发文档，然后才是创建应用和下载SDK。<br / >→ 结论： 开发文档应该放在容易找到的地方<br / ><br / >3、开发人员如何看开发文档？<br / >挑重点看，有目的地去看。<br / >→  结论：文档目录及内容排版清晰<br / ><br / >4、APP key和secret怎么用？<br / >App key 一般写在 header、query string 或者 body 里，app secret 在生成签名时候使用。<br / >创建完应用后复制粘贴key和secret。拿到之后用到自己的工程里面，服务器认证的过程。<br / >→  结论：APP key 和 secret 是分开使用的且一般在创建完应用后就使用，可以在创建完应用之后，有一键复制的功能，直接复制key/secret，提高操作效率。<br / ><br / >5、在应用列表关注什么<br / >主要关注应用名称和key，如果列表内容很多，会使用网页上的查找功能找到自己要的。<br / >→  结论：应用列表中存在应用较多的情况，需要提供搜索功能。</p>
      <div style={{position: 'relative', left:'100px'}}>
        <div id="430"></div>
      </div>
    </div>

    <div className="设计方案">
    <div className="设计方案1"><a name="44"></a><h1>03</h1>
      <h2 id="44">设计方案</h2>
      <h3>设计体验关键/设计目标</h3>
      <LazyImg  src={require('../image/网站体验关键.png')} width="950px" height="232px"/></div>
      <div className="设计方案2"><h4>①首页-技术与优势</h4>
      <LazyImg id="网站首页" src={require('../image/网站首页.png')} width="980px" height="231px"/></div>
      <div className="设计方案21"><LazyImg  src={require('../image/首页结果呈现.png')} width="950px" height="770px"/></div>
      <div className="设计方案3"><h5>②应用管理</h5>
      <LazyImg id="应用管理" src={require('../image/网站应用管理.png')} width="972px" height="163px"/></div>
      <div className="设计方案31"><LazyImg  src={require('../image/网站应用管理结果.png')} width="950x" height="533px"/></div>
      <div className="设计方案4"><h6>③创建应用-填写表单</h6>
      <LazyImg id="填写表单" src={require('../image/填写表单.png')} width="972px" height="163px"/></div>
      <div className="设计方案41"><LazyImg  src={require('../image/辅助信息.gif')} width="950x" height="515px"/></div>
      <div className="设计方案5"><h6>④创建应用-成功</h6>
      <LazyImg id="创建应用成功" src={require('../image/创建应用成功.png')} width="972px" height="163px"/></div>
      <div className="设计方案51"><LazyImg  src={require('../image/创建应用成功结果.png')} width="970x" height="555px"/></div>
      <div className="设计方案6"><h6>⑤应用列表</h6>
      <LazyImg id="应用列表" src={require('../image/应用列表.png')} width="972px" height="163px"/></div>
      <div className="设计方案61"><LazyImg  src={require('../image/应用列表结果.png')} width="970x" height="555px"/></div>
      
      <div style={{position: 'relative', left:'100px'}}>
        <div id="440"></div>
      </div>
    </div>
    

    <div className="反思总结4" id="45">
      <div className="反思总结41"><h1>04</h1>
      <h2>反思总结</h2>
      <h3>开发者工具设计</h3>
      <p id="反思1">1、要了解开发人员的特点：<br />* 追求效率、目的性强；<br />* 注重功能的齐全；<br />* 注重产品性能，追求可用性，易用性；<br /><br />通过用户调研，了解目标用户的特点、使用场景和行为，在此基础上思考在设计上可以做的尝试。<br /><br />2、吃透业务<br />开发者使用的工具是自己不熟悉的领域，有很多专业术语和技术(比如平台中的APP key&secret等）在设计前，需要清楚所有的业务及操作流程，避免因为不清楚业务或流程而导致设计出错。</p></div>
       <div className="反思总结42"><h4>Web端设计</h4>
      <p id="反思2">整理Web控件库，提高效率<br />第一次接触Web设计，对Web空间设计规范还不够熟悉，完成这次设计后，我去了解网站的控件并分析不同控件的使用场景和规范，整理构建了自己的Web控件库。</p></div>
      <LazyImg  src={require('../image/网页控件.png')} width="950x" height="398px"/>
    </div>

    <div className="翻页41">
      <Link to="/p3" ><button >上一篇</button></Link></div>
    <div className="翻页42"> <Link to="/p5" ><button >下一篇</button></Link></div>
    <div id="450"></div>
    <div className="Footer4"> ©️2019 by Joya Zheng </div>
  </div>
</div>
)

export default p4
