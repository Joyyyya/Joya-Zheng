import React from 'react'
import Link from 'gatsby-link'
import './p6.css'
import Sidebar from '../components/Sidebar';
import LazyImg from '../components/LazyImg';


const anchors = [{ 
  id: '61', label: '简介'
}, {
  id: '62', label: '设计背景',
}, {
  id: '620', label: null
}, {
  id: '63', label: '设计分析'
}, {
  id: '64', label: '方案对比'
}, {
  id: '640', label: null
}, {
  id: '65', label: '最终方案'
}];

const p6 = () => (
    <div>
      <Sidebar anchors={anchors}/>
      <div className="content6">
        <a></a> <h1>真时4G智能手表</h1>

        <div className="简介6" id="61">
          <LazyImg src={require('../image/手表.png')} />
          <p id="简介6">简介</p>
          <p id="简介内容6">随着科技发展和4G时代的到来，智能手表不断发展，逐渐脱离其他电子设备独立使用。真时科技希望在现有产品功能的基础上研发设计一款4G智能手表，这款手表可以独立通信，并且相比公司原来的产品具备更多更完善的功能。独立通信手表面临着一个挑战：如何让用户在小小的表盘中高效地完成任务。</p>
          <p id="时间6">时间</p>
          <p id="时间内容6">2018/11-2018/12</p>
          <p id="角色和工作6">角色和工作</p>
          <a></a><p id="角色和工作内容6">交互设计师负责更换表盘需求设计</p>
        </div>
        <div className="设计背景6" id="62">
          <h1>01</h1>
          <h2>设计背景</h2>
          <p>时间表盘是手表的第一入口，承载基础的时间显示、快捷信息获取和个性化需求。4G智能手表中用户可以随时切换表盘，我对这个需求进行分析，确定用户的操作路径和方式，提出不同设计方案并根据优劣势抉择最终方案，完成界面交互设计。</p>
          <a></a><LazyImg src={require('../image/表盘.png')} />
          <div id="620"></div>
        </div>
        <div className="设计分析6">
          <div className="设计分析61">         
            <h1>02</h1>
            <h2>设计分析</h2>
            <h3>1.用户使用场景</h3>
            <LazyImg src={require('../image/不满意.png')} width="300" />
            <LazyImg src={require('../image/预览.png')} width="300" />
            <LazyImg src={require('../image/管理.png')} width="300" />
            <div className="unhappy"><p>用户对现在的表盘不满意，想快速换个表盘</p></div>
            <div className="eye"><p>用户在手机APP上下载表盘后在手表上快速预览</p></div>
            <div className="guanli"><p>管理已有的表盘，删除不喜欢的表盘，以便于快速寻找喜欢的表盘</p></div>
            <h4  id="63">2.用户目的及使用频率</h4>
            <LazyImg id="goal" src={require('../image/目标.png')} width="300" />
            <LazyImg id="pinlv" src={require('../image/频率.png')} width="300" />
            <div className="goal"><p>如何快速浏览已下载的表盘，并进行切换</p></div>
            <div className="pinlv"><p>切换屏幕频率较低。比应用表盘、历史通知和待办事项的频率低</p></div>
          </div>  
          <div className="设计分析62">  
            <h5>3.用户行为路径</h5>
            <LazyImg src={require('../image/路径1.png')} />
            <LazyImg src={require('../image/路径2.png')} />
            <LazyImg src={require('../image/路径3.png')} />
            <p id="b1">在时间表盘进入管理表盘界面>浏览表盘>点击预览>多次浏览预览对比后>找到喜欢的>确定更换</p>
            <p id="b2">DM上下载表盘后>在时间表盘进入管理表盘界面>浏览刚下载的表盘>预览下载的表盘>多次浏览预览对比后>找到喜欢的>确定更换</p>
            <p id="b3">在时间表盘盘进入管理表盘界面>浏览表盘>发现有不喜欢的/过时的表盘>删除表盘>继续浏览表盘>预览表盘>多次浏览预览对比后>找到喜欢的>确定更换</p>
          </div>
          <div className="设计分析63">  
            <h6>4.设计要点</h6>
            <LazyImg src={require('../image/快速预览.png')} />
            <LazyImg src={require('../image/对比.png')} />
            <a name="64"></a><LazyImg src={require('../image/路径短.png')} />
            <p id="fast">快速浏览 > 多个表盘浏览</p>
            <p id="clear">对比 > 表盘样式清晰</p>
            <p id="short">快速预览 > 操作路径短</p>
          </div>   
        </div>
        <div className="方案对比6" style={{ height: 3182 }} id="64">
          <div className="方案对比61"> 
            <h1>03</h1>
            <h2>方案对比</h2>
            <h3>1.进入表盘管理</h3>
            <p>在时间表盘界面，已经定义的操作有：上下左右滑动，两个key的按压。暂时还没有定义单击、双击、长按的操作。除此之外还有两指操作，三指操作，缩放、手掌。</p>
            <LazyImg src={require('../image/单击.png')} />
            <LazyImg src={require('../image/双击.png')} />
            <LazyImg src={require('../image/长按.png')} />
            <p id="单击">1.单击是最简单的操作；<br />2.时间表盘界面使用户最经常最容易触达的界面；<br />3.在时间表盘单击切换表盘成本低，但切换表盘频率并不高；<br />4.容易发生误触；<br />5.单击切换不适合</p>
            <p id="双击">1.比单击成本高，但是切换表盘是进入一个新的入口，双击进入其他界面不符合用户心智模型</p>
            <p id="长按">1.长按成本高;<br />2.手机上，长按app图标进入app管理，可以对app进行排序和删除;<br />3.长按进入管理界面符合用户心智模型，用户学习成本也不会太高</p>
            <div className="两指"><LazyImg src={require('../image/两指.png')} /></div>
            <div className="缩放"><LazyImg src={require('../image/缩放.png')} /></div>
            <p id="两指">1.手表屏幕小，两指/三指操作容易遮住屏幕;<br />2.对屏幕灵敏度要求高，能够识别多指情况</p>
            <p id="缩放">1.手表屏幕小，缩放的操作的距离较短，缩放不容易识别;<br />2.手掌操作与暗屏情况类似，容易混淆;<br />3.手掌操作会完全挡住手表屏幕</p>
          </div>
          <div className="方案对比62"> 
            <h4>2.浏览表盘</h4>
            <p>需要快速浏览表盘，对比各表盘，看清表盘样式。</p>
            <LazyImg src={require('../image/左右滑动浏览.png')} />
            <LazyImg src={require('../image/上下滑动浏览.png')} />
            <LazyImg src={require('../image/缩略图浏览.png')} />
            <p id="左右">1.可以显示表盘名称，左右滑动快速浏览；<br />2.一次只能查看一个表盘；<br />3.左右滑动切换与应用表盘的切
换方式一致</p>
            <p id="上下"> 1.不好排版表盘名称，上下滑动快速浏览；<br />2.一次只能查看一个表盘；<br />3.上下滑动比较顺畅，但是浏览表盘的过程更关注表盘样式细节，滑动过于顺畅不便于用户停留查看</p>
            <p id="缩略"> 1.一次可浏览四个表盘；<br />2.图片太小不方便快速预览，用户需要点击预览之后才能看出效果；<br />3.细节不清晰，难以对比不同的表盘</p>
          </div> 
          <div className="方案对比63"> 
            <h5>3.删除表盘</h5>
            <p>删除表盘的操作频率低，要防止用户误触删除表盘。</p>
            <div className="上移"><LazyImg src={require('../image/上移删除.png')} /></div>
            <div className="删除"><LazyImg src={require('../image/删除.png')} /></div>
            <p id="上移">1.击表盘上移出列表删除表盘;<br />2.用户操作过程中不知道这是删除操作</p>
            <p id="删除">1.点击左上角按钮删除，和手机上的删除操作一样;<br />2.图标较小，不容易点击，防止误触;<br />3.给用户的引导太强，删除表盘并不是高频行为，优先级低于浏览切换表盘。影响表盘样式</p>
            <div id="640"></div>
          </div>  
          <div className="方案对比64">     
            <div className="上移1"><LazyImg src={require('../image/上移删除1.png')} /></div>
            <a name="5"></a><LazyImg src={require('../image/上移删除2.png')} />
            <p id="上移1">1.当用户做出上移删除表盘的动作时，左边的表盘会往右移。<br />2.用户完全移出表盘时，左边的表盘取代移出表盘的位置。<br />3.表盘位置的移动给用户反馈，但是反馈不够明显。</p>
            <p id="上移2">1.当用户点击表盘上移时， 呼出删除操作。<br />2.当用户点击表盘上移时，表面上方出现垃圾箱，用户将表盘上移进垃圾箱删除。<br />3.用户删除后，左边的表盘替代原表盘位置</p>
          </div>  
        </div >
        <div className="最终方案6" id="65">
          <h1>04</h1>
          <h2>最终方案</h2>
          <LazyImg src={require('../image/最终方案.png')} />
        </div>
        <div className="翻页16">
          <Link to="/p2" ><button >上一篇</button></Link></div>
        <div className="Footer"> ©️2019 by Joley Zheng </div>
      </div>
    </div>
);


export default p6
