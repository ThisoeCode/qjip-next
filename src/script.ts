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
  // 大题目下面的小字
  hl:'女性主人公×幻想恋爱×剧情游戏企划',
  // 微博链接
  weiboHref:'https://weibo.com/n/%E5%8D%83%E8%BF%B9%E5%88%B6%E4%BD%9C%E7%BB%84',
  // b站链接
  biliHref:'https://space.bilibili.com/2005632',
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
works={
  // 游戏信息
  data:{
    // 《异世界的雪与奇迹》
    YSJDXYQJ:{ dir:'YSJDXYQJ',
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
      weshopURL:'',
    },
    // 《瓶中琉璃海》
    PZLLH:{ dir:'PZLLH',
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
      weshopURL:'',
    },
  },
},
/* 游戏信息变量名备忘

    // 《游戏名称（注释用）》
    XXX:{ dir:'XXX',
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

      biliBV_main:'BV1fMcEeVERU',
      biliBV_list:[
        {label:'宣传概念PV',list:['','']},
        {label:'宣传概念PV',list:['']},
        {label:'游戏录屏',list:['']},
        {label:'开发日志',list:['']},
      ],
      steamID:2235810,
      weshopURL:'',
    },

*/



// ▉ 最新情报 ▉
infos={

},



// ▉ 关于我们 ▉
about={

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