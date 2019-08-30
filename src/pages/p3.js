import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar';
import LazyImg from '../components/LazyImg';
import Animate from '../components/Animate';
import './p3.css'

const anchors = [{ 
  id: '31', label: '简介'
}, {
  id: '32', label: '3D Avatar',
}, {
  id: '320', label: null
}, {
  id: '33', label: 'draw&dance'
}, {
  id: '330', label: null
},{
  id: '34', label: '空间笔刷'
}, {
  id: '340', label: null
}, {
  id: '35', label: '总结反思'
}, {
  id: '350', label: null
}];

const triggerSelectors = [
  '.简介2', 
  '.需求背景1', 
  '.设计要点11', '.设计要点12', '.设计要点13', '.设计要点14', '.设计要点15', '.设计要点16', 
  '.最终方案1', 
  '.需求背景2', 
  '.设计要点21', '.设计要点22', '.设计要点23', '.设计要点24', '.设计要点25', '.设计要点26', 
  '.最终方案2', 
  '.需求背景3', 
  '.设计要点31', '.设计要点32', '.设计要点33', 
  '.最终方案3'
]; 

const p3 = () => (
  <div>
    <Sidebar anchors={anchors}/>
    <Animate triggerSelectors={triggerSelectors}/>

    <div className="content3">
      <a name="31"></a> <h1>AR项目合集</h1>
      <div className="简介2" id="31">
        <LazyImg src={require('../image/AR简介.png')} width="468px" height="426px"/>
        <p id="简介3">简介</p>
        <p id="简介内容3">AR是商汤一直在探索的领域，基于现有的AR技术，商汤通过开发demo产品，展示技术并销售技术，或通过demo了解市场及用户需求。在商汤实习过程中，有幸接触到三个AR产品的设计：3D Avatar、draw and dance、AR log，并在设计过程中了解了AR产品的设计要点。</p>
        <p id="时间3">时间</p>
        <p id="时间内容3">2019/02-2019/09</p>
        <p id="角色和工作3">角色和工作</p>
        <a name="32"></a><p id="角色和工作内容3">交互设计师负责APP交互设计</p>
      </div>

      <div className="体感3D">
        <h1>01</h1>
        <h2 id="32">3D Avatar</h2>
        <div className="需求背景1"><h3>1.需求背景</h3>
        <p>3D Avatar是一款肢体驱动游戏产品，通过扫描人体，识别驱动点，用户即可在游戏互动界面通过肢体驱动3D人体模型。在接手项目前，3D Avatar已完成第一期开发，我需要在原来的产品基础上对产品进行优化，增加新的体验模式及用户引导，提升玩家操作体验。</p></div>
        <div className="设计要点11"><h4>2.设计要点</h4>
        <LazyImg  src={require('../image/3D 设计要点1.png')} width="956px" height="392px"/></div>
        <div className="设计要点12"><LazyImg  src={require('../image/3D 设计要点呈现1.png')} width="500px" height="311px"/></div>
        <div className="设计要点13"><LazyImg  src={require('../image/3D 设计要点2.png')} width="965px" height="323px"/></div>
        <div className="设计要点14"><LazyImg  src={require('../image/3D 设计要点呈现2.png')} width="698px" height="296px"/></div>
        <div className="设计要点15"><LazyImg  src={require('../image/3D 设计要点3.png')} width="965px" height="341px"/></div>
        <div className="设计要点16"><LazyImg  src={require('../image/3D 设计要点呈现3.png')} width="282px" height="256px"/></div>
        <div className="最终方案1"><h5>3.最终方案</h5>
        <LazyImg  src={require('../image/3D 结果呈现.png')} width="958px" height="227px"/></div>
        <div style={{position: 'relative', left:'100px'}}>
          <div id="320"></div>
        </div>
      </div>

      <div className="火柴人">
      <a name="33"></a><h1>02</h1>
        <h2 id="33">draw & dance</h2>
        <div className="需求背景2"><h3>1.需求背景</h3>
        <p>draw&dance是一款AR游戏APP，是一家手机公司与商汤的合作项目，该APP主要是用来展示手机的AR能力。用户通过绘画或在现实生活中找一个火柴人，便可以在屏幕中生成一个会动火柴人，用户可以与火柴人互动，并通过播放音乐让火柴人跳舞。</p></div>
        <div className="设计要点21"><h4>2.设计要点</h4>
        <LazyImg  src={require('../image/火柴人1.png')} width="950px" height="321px"/></div>
        <div className="设计要点22"><LazyImg  src={require('../image/火柴人结果1.png')} width="741px" height="328px"/></div>
        <div className="设计要点23"><LazyImg  src={require('../image/火柴人2.png')} width="950px" height="222px"/></div>
        <div className="设计要点24"><LazyImg  src={require('../image/火柴人结果2.png')} width="501px" height="302px"/></div>
        <div className="设计要点25"><LazyImg  src={require('../image/火柴人3.png')} width="950px" height="211px"/></div>
        <div className="设计要点26"><LazyImg  src={require('../image/火柴人结果3.png')} width="501px" height="304px"/></div>
        <div className="最终方案2"> <h5>3.最终方案</h5>
        <LazyImg  src={require('../image/火柴人结果呈现.png')} width="961px" height="684px"/></div>
        <div style={{position: 'relative', left:'100px'}}>
          <div id="330"></div>
        </div>
      </div>

      <div className="空间笔刷">
      <a name="34"></a><h1>03</h1>
        <h2 id="34">空间笔刷</h2>
        <div className="需求背景3"><h3>1.需求背景</h3>
        <p>这是基于google的just a line APP设计的一款demo产品，用户可以在三维空间中绘画，相比just a line 该产品可以保存创作，当用户扫描同一场景后可查看历史创作，还可以和好友一起创作。</p></div>
        <div className="设计要点31"><h4>2.设计要点</h4>
        <LazyImg  src={require('../image/空间1.png')} width="950px" height="452px"/></div>
        <div className="设计要点32"><LazyImg  src={require('../image/空间2.png')} width="950px" height="466px"/></div>
        <div className="设计要点33"><LazyImg  src={require('../image/空间3.png')} width="950px" height="415px"/></div>
       
        <div className="最终方案3"><h5>3.最终方案</h5>
        <LazyImg  src={require('../image/空间结果呈现.png')} width="950px" height="1331px"/></div>
        <div style={{position: 'relative', left:'100px'}}>
          <div id="340"></div>
        </div>
      </div>

      <div className="反思总结" id="35">
      <a name="35"></a><h1>06</h1>
        <h2>反思总结</h2>
        <p>目前AR类产品技术和交互模式还不够成熟，对于普通用户来说，使用AR类产品需要一定的学习成本，不管是用户体验还是设计过程都有一定的挑战性。参与了三次AR类产品的设计，我总结以下几个设计过程中的设计心得：<br /><br />设计前：<br />与产品经理确定整体的使用流程，对于其中一些不合理的流程与产品经理讨论优化，尽量让整个体验更加流程；<br /><br />设计中：<br />1.了解技术实现的原理，对于技术不能解决的问题通过设计去优化；<br />2.需要好好设计用户引导，给予用户足够的提示和帮助，不要让用户在使用过程中有挫败感；<br />3.制作可交互的动效原型，做一些简单的用户测试，保证产品的易用性。<br /><br />设计后：<br />1.与视觉和开发做好沟通，对于需要通过视觉完善引导设计的部分与视觉阐述清楚；<br />2.产品上线后自己多体验并收集用户反馈，记录问题并为下次优化做准备。</p>


      </div>

      <div className="翻页31">
        <Link to="/p2" ><button >上一篇</button></Link></div>
      <div className="翻页32"> <Link to="/p4" ><button >下一篇</button></Link></div>
      <div id="350"></div>
      <div className="Footer"> ©️2019 by Joya Zheng </div>
    </div>
  </div>
)


export default p3
