import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar';
import LazyImg from '../components/LazyImg';

import './p1.css'

/**
 *    <a href="#11" id="n1" >简介</a>
   <a href="#12" id="n2" >设计背景</a>
   <a href="#13" id="n3" >设计分析</a>
   <a href="#14" id="n4" >方案对比</a>
   <a href="#15" id="n5" >后期反馈</a>
 */

const anchors = [{ 
  id: '11', label: '简介'
}, {
  id: '12', label: '设计背景',
}, {
  id: '120', label: null
}, {
  id: '13', label: '设计分析'
}, {
  id: '130', label: null
},{
  id: '14', label: '方案对比'
}, {
  id: '140', label: null
}, {
  id: '15', label: '后期反馈'
}];

const p1 = () => (
  <div>
    <Sidebar anchors={anchors}/>

    <div className="content1">
      <a name="11"></a> <h1>SenseHello 刷脸打卡动效设计</h1>
      <div className="简介1" id="11">
        <LazyImg src={require('../image/首图.png')} />
        <p id="简介1">简介</p>
        <p id="简介内容1">SenseHello是基于公司研发的人脸识别技术，商汤内部员工刷脸打卡考勤软件。打卡软件讲究效率，而改版前的刷脸动效不够顺畅，整体动效迟缓，影响打卡体验。我刷脸打卡的流程进行分析，在原有的动效基础上进行改进，提高刷脸打卡的效率和整体体验。</p>
        <p id="时间1">时间</p>
        <p id="时间内容1">2019/04-2019/06</p>
        <p id="角色和工作1">角色和工作</p>
        <a name="12"></a><p id="角色和工作内容1">交互设计师负责刷脸打卡动效设计</p>
      </div>
      <div className="设计背景1">
        <h1>01</h1>
        <h2 id="12">设计背景</h2>
        <LazyImg src={require('../image/改版前.gif')} />
        <div style={{position: 'relative'}}>
          <div id="120" style={{position: 'absolute', top: '-200px'}}></div>
        </div>
        <LazyImg src={require('../image/设计背景.png')} />
      </div>
      <div className="设计分析1">
        <a name="13"></a><h1>02</h1>
        <h2 id="13">设计分析</h2>
        <h3>1.存在问题分析</h3>
        <p>分析整体的动效，将打卡动效的过程分为：1、打卡界面过渡；2、识别过程；3.上传打卡loading；4.成功并返回界面。<br />改版前各版块存在的问题如下：</p>

        <LazyImg src={require('../image/改版前1.png')} />
        <LazyImg src={require('../image/改版前2.png')} />
        <LazyImg src={require('../image/改版前3.png')} />
        <p id="一">1.打卡界面过渡动效不流畅，点击按钮后界面会停滞一下，之后打卡界面从底部上滑</p>
        <p id="二和三">2.识别过程暂无问题；<br />3.loading弹窗生硬。</p>
        <p id="四">4.打卡成功后返回首页过渡不够自然，且自动刷新界面降低了整体打卡效率，用户需要需等待刷新后才可以看打卡时间。</p>

        <h4>2.用户特征分析</h4>
        <p>产品的主要用户就是商汤科技公司的员工，这个群体有鲜明的用户特征：</p>
        <LazyImg src={require('../image/用户特征.png')} />

        <h5 id="130">3.产品特征分析</h5>
        <p>SenseHi相对于其他类似的产品特征主要体现在以下三个方面，这三个方面也是产品希望向用户传达的：</p>
        <LazyImg src={require('../image/产品特征.png')} />

        <h6>4.设计原则</h6>
        <p>基于用户群体特征和产品特征，提取以下几个主要关键词，并对关键词进行细化，分析出刷脸打卡动效设计的主要原则。</p>
        <LazyImg src={require('../image/设计原则.png')} />

      </div>

      <div className="方案对比1">
        <a name="14"></a><h1>03</h1>
        <h2 id="14">方案对比</h2>
        <p id="方案对比">基于上述设计原则，针对打卡动效中存在问题的三个过程进行重新设计，对比不同方案的优劣，确定最终的方案。</p>
        <h3>1.进入界面过渡</h3>
        <LazyImg id="放大" src={require('../image/放大.gif')} width="230px" />
        <LazyImg id="模糊" src={require('../image/模糊.gif')} width="230px" />
        <LazyImg id="绽放" src={require('../image/绽放.gif')} width="230px" />
        <p id="方案一">方案一：遮罩蒙版放大进入</p>
        <p id="方案二">方案二：模糊过渡</p>
        <p id="方案三">方案三：打卡按钮上升放大像烟花一样绽开</p>
        <LazyImg id="缩小" src={require('../image/缩小.gif')} width="230px" />
        <p id="最终">方案三动效过渡不够自然，与设计原则中的温和亲切相违背，最终结合方案一和方案二，蒙版模糊放大过渡。但由于在后期开发过程中发现模糊的实现效果并不理想，放弃了进入界面过渡过程的模糊效果，并做了调整：蒙版缩小进入，与最后成功状态蒙版放大回到首页相呼应。</p>
        <p id="end">最终方案：遮罩蒙版放大进入</p>
        <h4>2.loading</h4>
        <LazyImg id="大" src={require('../image/大圈loading.gif')} width="230px" />
        <LazyImg id="小" src={require('../image/小圈loading.gif')} width="230px" />
        <p id="说明">1.打卡的时候用户视线会一直停留在打卡的圈内，若圈外变化会很难注意到；<br /><br />2.方案一中loading过程与识别过程形式一 致，用户难以区分，有可能会误认为loading过程为识别过程，从而认为识别过程太慢效率不高。<br /><br />选择第二种，让用户的视线集中在屏幕中间。</p>
        <p id="外">方案一：圈外红点变为loading动效</p>
        <p id="内">方案二：蒙版收缩白圈内loading</p>
        <h5>3.成功反馈</h5>
        <LazyImg id="弹窗" src={require('../image/成功弹窗.gif')} width="230px" />
        <LazyImg id="打钩" src={require('../image/打钩.gif')} width="230px" />
        <p id="说明2">方案一比较普通，反馈形式较生硬无法引导用户视线，且与loading过渡衔接不流畅；<br /><br />方案二与loading采用一样的形式，过渡衔接自然，且能给予及时的反馈，在打卡界面就给予反馈。采用方案二。</p>
        <p id="toast">方案一：toast成功提示</p>
        <p id="success">方案二：由原来的loading变为成功的提示</p>
        <h6>4.返回首页过渡</h6>
        <LazyImg id="上升" src={require('../image/上升.gif')} width="230px" />
        <LazyImg id="卡片" src={require('../image/卡片.gif')} width="230px" />
        <LazyImg id="时间" src={require('../image/时间变化.gif')} width="230px" />
        <p id="方案一4">方案一：首页内容上升过渡</p>
        <p id="方案二4">方案二：卡片缩放进入</p>
        <p id="方案三4">方案三：打卡时间切换</p>π
        <div id="140" />
  <p id="说明4">回想自己打卡的行为，自己打完卡之后最关心的是打卡时间，大部分情况下打完卡只会去看卡片上打卡的时间。从这个思路出发，应该是引导用户去看打卡的时间，时间的更新变化对用户来说也会变得更加合理自然，最终选择第三种动效。</p>
        <p id="最终1">5.最终方案</p>
        <LazyImg id="打卡动效" src={require('../image/最终.gif')} width="230px" />
        <LazyImg id="动效文档" src={require('../image/动效文档.png')} width="650px" />
        <p id="方案">最终方案</p>
        <p id="文档">动效文档</p>
        <a name="15"></a>
      </div >
      <div className="后期反馈1" id="15">
        <h1>04</h1>
        <h2>后期反馈</h2>

      </div>

      <div className="翻页12"> <Link to="/p2" ><button >下一篇</button></Link></div>
      <div className="Footer"> ©️2019 by Joley Zheng </div>
    </div>
  </div>
)

export default p1
