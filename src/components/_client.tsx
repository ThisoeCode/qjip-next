'use client'
export const

// 1. bilibili embedded video
/** bilibili iframe */
Biframe=({url,id,className,style}:{
  url:string,
  id?:string,
  className?:string,
  style?:React.CSSProperties,
})=><iframe id={id}style={style}
  className={"bif "+className||''}
  src={url}
  scrolling="no"
  frameBorder="no"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>,

BV=({bv,p=1,id,className}:{
  bv:string,
  p?:number,
  id?:string,
  className?:string,
})=><iframe
  id={id}
  className={"bif "+className?className:''}
  src={`//player.bilibili.com/player.html?isOutside=true&bvid=${bv}&p=`+p}
  scrolling="no"
  frameBorder="no"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>,



// 2. Steam Store Link
SteamLink=({children,appId,useLogo=false,id,className,style}:Readonly<{
  children?:React.ReactNode,
  appId:number,
  useLogo?:boolean,
  id?:string,
  className?:string,
  style?:React.CSSProperties,
}>)=><a id={id}style={style}
  className={"steam "+className?className:''}
  href={'steam://store/'+appId}
  // onClick={
  //   ()=>window.open('https://store.steampowered.com/app/'+appId,'_blank')
  // }
>{children||useLogo&&<i className="svg steam" style={{width:'100%',height:'100%'}}/>}</a>,



// n. 
/**  */
_=0