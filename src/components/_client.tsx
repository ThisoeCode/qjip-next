'use client'
import { useEffect, useState } from "react"

export const

// 1. bilibili embedded video
/** bilibili iframe */
Biframe=({bv,p=1,id,className,style}:{
  bv:string,
  p?:number,
  id?:string,
  className?:string,
  style?:React.CSSProperties,
})=><iframe
  id={id}style={style}
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
}>)=>{
  const
    userAgent = navigator.userAgent || "",
    [link,setLink] = useState('steam://store/'+appId)

  useEffect(()=>{
    const
      phones=/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i
    if(phones.test(userAgent))
      setLink("https://store.steampowered.com/app/"+appId)
  }, [appId,userAgent])

  return<a id={id}style={style}
    className={"steam "+className?className:''}
    href={link}
  >{children||useLogo&&<i className="steam svg" style={{width:'100%',height:'100%'}}/>}</a>
},



// n. 
/**  */
_=0