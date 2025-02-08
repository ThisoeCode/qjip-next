'use client'
import Link from "next/link"
import { nav, banner as sc } from "@/script"
import React, { useEffect, useState } from "react"

export default function Nav(){
  const
    [display,setDisp]=useState('none'),
    [isShow,setShow]=useState(false),
    onResize=()=>
      window.innerWidth<=800
      ? setDisp(isShow?'flex':'none')
      : (()=>{
        setDisp('flex')
        setShow(false)
      })(),
    Anch=({href,children}:{href?:string,children?:React.ReactNode})=>
      href ? <Link href={href||''}  onClick={()=>setShow(!isShow)}>{children}</Link> : <></>,
    menu=[
      {href:'/',txt:nav.index},
      {href:'/about',txt:nav.about},
      {href:'/works',txt:nav.works},
      {href:'/infos',txt:nav.infos},
    ],
    order=''+(nav.order as number)

  useEffect(onResize)
  useEffect(()=>window.addEventListener("resize",onResize))

  return<i id="nav">
    <nav style={{display}}>{
      Array.from(order).map((v,j)=>
        <Anch href={menu[parseInt(v)-1]?.href} key={'Anch'+v+j}>{menu[parseInt(v)-1]?.txt}</Anch>
      )
    }</nav>
    <a href={sc.weiboHref} target="_blank"><i className="weibo svg"/></a>
    <a href={sc.biliHref} target="_blank"><i className="bili svg"/></a>
    <button onClick={()=>setShow(!isShow)}>
      <i className={(isShow?'close':'burger')+" svg"}/>
    </button>
  </i>
}