/** works页 单个游戏信息 */
export type AworkScript = {
  /** 指定public/内的图片资源文件夹名 */
  dir:string
  /** 发布时间 `XX年XX月XX日初次发布` */
  releaseDate:string
  /** 游戏名称 `标题` */
  title:string
  /** 元素 `元素一×元素二…` */
  elem:string
  /** 类型 `短篇视觉小说` */
  cate:string
  /** 平台 `Steam` */
  platform:string
  /** 价格 */
  price:string
  /** Staff `{job:'文案',name:'未来轨迹'},` */
  staff:{job:string,name:string}[]
  /** 直接展示的视频的BV号 */
  biliBV_main:string
  /** 视频列表 `{label:'游戏录屏',list:['BV1oX4y187CL','BV1fM411Q7HW']},` */
  biliBV_list:{label:string,list:string[]}[]
  /** Steam商品ID */
  steamID:number
  /** TODO: 漫画内容（待定） */
  manga?:unknown
}

/** infos页 单个消息 */
export type InfoScript = {
  /** 消息标题 */
  title:string
  /** 消息内容 */
  ctt:string
  /** 消息时间 `2025.2.2` */
  dt:string
}





/* everything type */
export type preEvery = 
string|number|boolean|undefined|null|
Error
export type every = preEvery|preEvery[]|
Record<string,preEvery>|(()=>preEvery)