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
    Anch=({href,children}:{href:string,children:React.ReactNode})=>
      <Link href={href}  onClick={()=>setShow(!isShow)}>{children}</Link>

  useEffect(onResize)
  window.addEventListener("resize",onResize)

  return<i id="nav">
    <nav style={{display}}>
      <Anch href={'/'}>{nav.index}</Anch>
      <Anch href={'/works'}>{nav.works}</Anch>
      <Anch href={'/infos'}>{nav.infos}</Anch>
      <Anch href={'/about'}>{nav.about}</Anch>
    </nav>
    <a href={sc.weiboHref} target="_blank"><i className="weibo svg"/></a>
    <a href={sc.biliHref} target="_blank"><i className="bili svg"/></a>
    <button onClick={()=>setShow(!isShow)}>
      <i className={(isShow?'close':'burger')+" svg"}/>
    </button>
  </i>
}