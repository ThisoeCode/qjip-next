import { AworkScript, InfoScript } from "./lib/ts"

export const

// ▉ 目录 ▉ (会同时更新: 页眉目录、每页的标签页标题)
nav={
  // 1 (原 首页)
  index:'首页',
  // 2 (原 关于我们)
  about:'关于我们',
  // 3 (原 企划一览)
  works:'企划一览',
  // 4 (原 最新情报)
  infos:'最新情报',
  // 目录顺序: 1首页 2关于我们 3企划一览 4最新情报
  order: 1342,
},



// ▉ 统一页眉 ▉
banner={
  // 页眉颜色【前三个是RGB值，第四个是0~1的透明度（0无色，1不透明）】
  bgColor:[ 30 , 41 , 59 , 0.6 ],
  // LOGO旁的大题目
  h1:'千迹制作组 OFFICIAL SITE',
  // 手机端页眉大题目
  h1phone:'千迹制作组',
  // 大题目下面的小字
  hl:'女性主人公×幻想恋爱×剧情游戏企划',
  // 微博链接
  weiboHref:'https://weibo.com/n/%E5%8D%83%E8%BF%B9%E5%88%B6%E4%BD%9C%E7%BB%84',
  // b站链接
  biliHref:'https://space.bilibili.com/2005632',
},



// ▉ 统一页脚 ▉
foot={
  // 版权信息
  copyright:'© 2022 千迹制作组',
  // 备案信息 // TODO: 填写备案号
  beian:'沪ICP备0000000000号 (待修改)',
  // 备案链接 // TODO: 填写备案链接
  beianHref:'https://beian.miit.gov.cn/',
},



// ▉ 首页 ▉
index={
  // 临时文字
  tmp:
`欢迎来到千迹制作组网站

我们的主要活动主题是
女性主人公×幻想恋爱×剧情企划

官网尚在准备中还不完善
如您有意可以稍作预览
感谢您的阅读！`,

},



// ▉ 企划一览 ▉
works:{
  data:Record<string,AworkScript>,
  imgPath:Record<string,string>,
  weshopURL:string
}={
  // 游戏信息
  data:{
    // 《异世界的雪与奇迹》

    YSJDXYQJ:{ dir:'YSJDXYQJ',
      releaseDate:'2023年4月28日初次发布',
      title:'异世界的雪与奇迹',
      elem:'逆穿越×纯爱×圣诞',
      cate:'超短篇视觉小说',
      platform:'Steam',
      price:'游戏免费，可选收费中文语音DLC',

      staff:[
        {job:'策划',name:'未来轨迹'},
        {job:'文案',name:'未来轨迹'},
        {job:'原画',name:'阿诺'},
      ],

      biliBV_main:'BV1Tg4y1M7Ww',
      biliBV_list:[
        {label:'宣传概念PV',list:['BV1494y1s7XA']},
        {label:'语音及配乐试听',list:['BV1th4y1B7Aj','BV13D421u7iY']},
        {label:'游戏录屏',list:['BV1oX4y187CL','BV1fM411Q7HW']},
      ],

      steamID:2235810,
    },
    // 《瓶中琉璃海》
    PZLLH:{ dir:'PZLLH',
      releaseDate:'2023年9月29日初次发布',
      title:'瓶中琉璃海',
      elem:'姐弟恋×三人行×扭曲纯爱',
      cate:'短篇视觉小说',
      platform:'Steam',
      price:'暂未公布，预计2025年夏季公开',

      staff:[
        {job:'策划',name:'未来轨迹'},
        {job:'文案',name:'未来轨迹'},
        {job:'原画',name:'惑灵'},
      ],

      biliBV_main:'BV1fMcEeVERU',
      biliBV_list:[
        {label:'宣传概念PV',list:['BV1494y1s7XA','']},
        {label:'游戏录屏',list:['']},
      ],
      steamID:2235810,
      manga:true,
    },
    // 更多游戏…
  },


  // 图片命名
  // 说明：文件名及后缀必须完全一致！文件夹名称为大写开头字母，所有内部图片名统一。
  imgPath:{
    // 主图（横幅）
    main:'main.png',
    // 萌版 // TODO: ⭐存留有待商讨确定⭐
    smol1:'smol1.png',
    smol2:'smol2.png',
    smol3:'smol3.png',
  },

  // 微店网页版链接
  weshopURL:'https://weidian.com/?userid=1744983385',
},
/* 游戏信息对象格式备忘剪切板

    // 《游戏名称（注释用）》
    XXX:{ dir:'指定public/内的图片资源文件夹名',
      releaseDate:'XX年XX月XX日初次发布',
      title:'标题',
      elem:'元素一×元素二…',
      cate:'类型',
      platform:'平台',
      price:'价格',

      staff:[
        {job:'策划',name:'未来轨迹'},
        {job:'文案',name:'未来轨迹'},
        {job:'原画',name:'惑灵'},
      ],

      biliBV_main:'直接展示的视频的BV号',
      biliBV_list:[
        {label:'小标题',list:['视频一BV号','视频二BV号']},
        {label:'开发日志',list:['BVxxx']},
      ],

      steamID:Steam商品ID,

      // TODO: 漫画内容（待定）
      manga:{},
    },

*/



// ▉ 最新情报 ▉
infos:{data:InfoScript[]}={
  data:[ // 从最上面加新消息！
/* 最新情报消息格式备忘剪切板
    {
      title:'消息标题',
      ctt:'消息内容',
      dt:'2025.2.10',
    },
*/

    {
      title:'测试标题',
      ctt:'测试内容。。。信息正文。。。',
      dt:'2025.2.11',
    },

    {
      title:'官网非正式公开',
      ctt:'我们的官网（千迹制作组官方网站）非正式对外公开！当前网页外观非最终效果。正式公开日未定。',
      dt:'2025.2.2',
    },
    {
      title:'制作组计划参加上海ComicQuest02',
      ctt:'我们已经在上海ComicQuest02（3月15日~16日开展），申请摊位，预计将展出部分已有制品，并且会发布现场限定无料方卡。',
      dt:'2025.2.2',
    },
  ],
},




// ▉ 关于我们 ▉
about={
  tmpBlock:{
    title:'制作组简介',
    ctt:
`主要创作*女性主人公*中心的*幻想恋爱*风格*剧情企划*。
固定成员目前为1人，即主创未来轨迹。
随时欢迎联系合作，但不强制合作者加入制作组（默认为临时组队）。
自称制作组是为避免误会作者是一体机。`,
    links:[{
      label:'官方微博：千迹制作组',
      href:'https://weibo.com/n/千迹制作组',
    },{
      label:'哔哩哔哩：未来轨迹_千迹',
      href:'https://space.bilibili.com/2005632',
    },{
      label:'玩家Q群：678609648',
      href:'',
    }],
  },
},



// ▉ 元数据 ▉
metadata={
  // 标签页的标题（搜索引擎极有可能将此作为大标题）
    // 默认标题
    default:'千迹制作组 OFFICIAL SITE',
    // 格式化标题（%s处会显示当前页的名字）
    template:'%s - 千迹制作组',
  
  // 给搜索引擎描述本网站（可能作为搜索引擎展示的两三行小字）
    description:'',
  //...
    
},



// n. …
_={}