import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar';
import LazyImg from '../components/LazyImg';
import Animate from '../components/Animate';
import './p2.css'

const anchors = [{ 
  id: '21', label: '简介'
}, {
  id: '22', label: '用户特征',
}, {
  id: '220', label: null
}, {
  id: '23', label: '人脸布控'
}, {
  id: '230', label: null
},{
  id: '24', label: '图像布控'
}, {
  id: '240', label: null
}, {
  id: '25', label: '情报研判'
}, {
  id: '250', label: null
}, {
  id: '26', label: '用户画像'
}, {
  id: '260', label: null
}, {
  id: '27', label: '总结反思'
}, {
  id: '270', label: null
}];

const triggerSelectors = [
  '.简介2', 
  '.用户特征', 
  '.人脸布控1', '.人脸布控2', '.人脸布控22', '.人脸布控23','.人脸布控3',
  '.图像布控1', '.图像布控2', 
  '.情报研判1','.情报研判2','.情报研判3',
  '.用户画像1','.用户画像12','.用户画像13','.用户画像2','.用户画像2',
  '.反思总结'
]; 

const p2 = () => (
<div>
    <Sidebar anchors={anchors}/>
    <Animate triggerSelectors={triggerSelectors}/>

    <div className="content2">
      <a name="21"></a> <h1>网警图像监控后台系统</h1>
      <div className="简介2" id="21">
        <LazyImg src={require('../image/radar简介.png')} width="421px" height="264px"/>
        <p id="简介2">简介</p>
        <p id="简介内容2">基于商汤的人脸识别和图像识别技术，该系统可以帮助网警监控网络上发布的违规图片并协助其找出发布用户；这整个系统交互部分由我和我的导师共同完成，一共有八个模块，其中五个板块由我负责。因目前系统还在开发中，且保密性较高，不方便透漏更多详细信息。</p>
        <p id="时间2">时间</p>
        <p id="时间内容2">2019/07-2019/10</p>
        <p id="角色和工作2">角色和工作</p>
        <a name="22"></a><p id="角色和工作内容2">交互设计师负责后台系统交互设计</p>
      </div>
      <div className="用户特征">
        <h1>01</h1>
        <h2 id="22">用户特征</h2>
        <p>网警有明显的群体特征，经过实地考察和用户调研，总结了主要以下两点特征及设计要点，后面的设计将以这两个设计要点为基础。</p>
        <LazyImg  src={require('../image/用户特征1.png')} width="475px" height="264px"/>
        <LazyImg  src={require('../image/用户特征2.png')} width="475px" height="264px"/>
        <div style={{position: 'relative', left:'100px'}}>
          <div id="220"></div>
        </div>
      </div>
      <div className="人脸布控">
        <div className="人脸布控1">
          <a name="23"></a><h1>02</h1>
          <h2 id="23">人脸布控</h2>
          <h3>1.首页</h3>
          <LazyImg id="用户行为1" src={require('../image/用户行为.png')} width="945px" height="48px"/>
          <p id="人脸布控用户行为文字">网警会有自己分配的任务，大部分情况网警关注自己分配的业务场景，在业务场景下查看近期人脸布控的情况，主要查看近期被命中数量较高的人物以及其对应的发布用户ID。</p>
          <LazyImg src={require('../image/结果呈现.png')} width="945px" height="48px"/>
          <p id="人脸布控结果呈现文字">布控详情主要展示了具体某个人物下的发布用户ID，展示发布图片数量最多的前三名用户ID，这些ID是网警最关注的人物。</p>
          <LazyImg src={require('../image/人脸布控首页.png')} width="950px" height="534px"/>
        </div> 
        <div className="人脸布控2"> <h4>2.详情页</h4>
          <LazyImg id="用户行为2" src={require('../image/用户行为.png')} width="945px" height="48px"/>
          <p id="人脸详情用户行为">用户行为主要分为两步，第一步先选择人物，看具体某个人物下图片的发布情况，第二布关注发布数量最多的用户ID、群ID和IP。</p>
          <LazyImg src={require('../image/设计难点.png')} width="945px" height="48px"/>
          <p id="人脸详情设计难点">这两步是分成两个页面还是整合在一个页面，在一界面中应如何整合？</p>
          <LazyImg src={require('../image/思考解决.png')} width="945px" height="48px"/>
          <p id="人脸详情思考解决">1.切换人物查看人物下的图片是高频操作，分成两个页面效率会降低，不利于快速切换查看。<br />2.人物有人物属性分类，用户可选择人物属性再查看选择人物，如何在页面中呈现这两者的关系，并整合？</p>
          <div className="人脸布控22">
          <LazyImg src={require('../image/人脸布控思考解决.png')} width="950px" height="771px"/></div>
          <div className="人脸布控23">
          <LazyImg src={require('../image/结果呈现.png')} width="945px" height="48px"/>
          <LazyImg src={require('../image/人脸布控详情.png')} width="950px" height="534px"/></div>
        </div> 
        <div className="人脸布控3"> 
          <h5 id="230">3.图片详情</h5>
          <LazyImg id="用户行为3" src={require('../image/用户行为.png')} width="945px" height="48px"/>
          <p >查看图片发布信息，有时候需要对比人脸（置信度较低或对命中人物不熟悉的情况），会高频切换图片查看详情。</p>
          <LazyImg src={require('../image/思考解决.png')} width="945px" height="48px"/>
          <p >图片详情需要展示大量的文字发布信息，以及原图对比，同时要以弹窗的形式展现，利于用户高效率地查看不同图片详情。</p>
          <LazyImg src={require('../image/结果呈现.png')} wwidth="945px" height="48px"/>
          <p >参考dribble和Pinterest中查看大图的设计，将弹窗设计成全屏弹窗，左侧展示大图，右侧展示文字信息及原图对比图。</p>
          <LazyImg src={require('../image/人脸布控图片详情.png')} width="950px" height="258px"/>
        </div> 
      </div>

      
      <div className="图像布控">
        <div className="图像布控1">
          <a name="24"></a><h1>03</h1>
          <h2 id="24">图像布控</h2>
          <p id="图像布控简介">图像布控与人脸布控板块内容相似，只是人物替换成图像，整体交互与人脸布控保持一致，大致如下：</p>
          <h3>1.首页</h3>
          <p id="图像布控首页">网警主要关注发布图片最多的用户ID，在首页展示发布图片最多的用户ID及其发布的图片数量。</p>
          <LazyImg  src={require('../image/图像布控首页.png')} width="950px" height="534px"/>
          </div>
          <div className="图像布控2">
          <h4>2.布控详情页</h4>
          <p id="240">网警可以查看全部图片的命中情况，也可以切换不同的图片/视频，查看其命中情况。</p>
          <LazyImg  src={require('../image/图像布控详情页.png')} width="950px" height="534px"/>
        </div>
      </div >

      <div className="情报研判">
        <div className="情报研判1">
          <a name="25"></a><h1>04</h1>
          <h2 id="25">情报研判</h2>
          <p>情报研判分为三个部分：以图搜图、以脸搜图和以文搜图。整体界面布局如下图所示：</p></div>
          <div className="情报研判2">
          <LazyImg src={require('../image/情报研判布局.png')} width="950px" height="276px"/>
          <p>用户需要在结果中对图片进行排序，设计过程中排序控件的位置和样式难以决定，于是对三种不同的方案做了简单的用户测试，根据测试结果最终决定采用第三种方案，放在图片结果区域，既符合逻辑，又能让用户注意到。</p>
          <LazyImg src={require('../image/情报研判测试.png')} width="950px" height="333px"/></div>
          <div className="情报研判3">
          <h3 id="250">最终结果呈现</h3>
          <LazyImg src={require('../image/情报研判结果呈现.png')} width="950px" height="952px"/>
        </div> 
      </div>

      <div className="用户画像">
        <div className="用户画像1">
          <a name="26"></a><h1>05</h1>
          <h2 id="26">用户画像</h2>
          <h3 >1.首页</h3>
          <LazyImg src={require('../image/用户行为.png')} width="945px" height="48px"/>
          <p>网警在首页主要有三个行为：1.查看重点人群增量情况；2.查看全部用户的增量情况；3.查找用户ID查看具体的用户ID。</p>
          <LazyImg src={require('../image/设计难点.png')} width="945px" height="48px"/>
          <p>如何合理地整合这三种使用行为？</p>
          <LazyImg src={require('../image/思考解决.png')} width="945px" height="48px"/>
          <p>通过尝试不同的布局方式，分析优劣，决定最终方案。</p></div> 
          <div className="用户画像12">
          <LazyImg src={require('../image/用户画像首页思考.png')} width="950px" height="731px"/></div> 
          <div className="用户画像13">
          <LazyImg src={require('../image/结果呈现.png')} width="945px" height="48px"/>
          <LazyImg src={require('../image/用户画像结果.png')} width="950px" height="511px"/>
        </div> 

        <div className="用户画像2">
        <h4>2.用户详情</h4>
        <LazyImg src={require('../image/用户目的.png')} width="945px" height="48px"/>
        <p id="260">网警通过点击具体的用户ID进入用户详情，查看该用户ID的所有信息，根据信息最终判断出具体的用户身份。</p>
        <LazyImg src={require('../image/设计要点.png')} width="945px" height="48px"/>
        <LazyImg src={require('../image/用户画像详情设计要点.png')} width="950px" height="314px"/></div>
        <div className="用户画像21">
        <LazyImg src={require('../image/结果呈现.png')} width="945px" height="48px"/>
        <LazyImg src={require('../image/用户画像详情结果呈现.png')} width="950px" height="534px"/>
        </div>
      </div>

      <div className="反思总结" id="27">
        <h1>06</h1>
        <h2>反思总结</h2>
        <p>第一次接触后台系统，在设计过程中还存在很多问题，根据这次项目实战，我反思并总结了以下几条设计要点：<br />1.一定要先了解目标用户的人群特点、使用行为和目的，再基于此通过设计帮助用户完成其目的；<br />2.后台系统往往涉及到多角色和不同权限设计，这部分也是最复杂最繁琐的，设计前需要和产品经理确认权限内容并自己梳理清楚；<br />3.需要保持一致的用户体验，让用户在使用时，能感到熟悉、亲切，能直观的了解到操作会带来怎样的结果，提高使用效率；<br />4.后台系统一般讲究效率，在流程设计和界面交互中都需要以提高效率为目的去设计。</p>
      </div>

      <div className="翻页21">
        <Link to="/p1" ><button >上一篇</button></Link></div>
      <div className="翻页22"> <Link to="/p3" ><button >下一篇</button></Link></div>
      <div id="270"></div>
      <div className="Footer"> ©️2019 by Joya Zheng </div>
    </div>
  </div>
)


export default p2
