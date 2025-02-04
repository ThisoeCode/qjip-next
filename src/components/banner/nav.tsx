// 'use client'
import Link from "next/link"
import { nav, banner as sc } from "@/script"

export default function Nav(){
  // TODO: phone screen change: CSS OR REACT？
  return<i id="nav">
    <nav>
      <Link href={'/'}>{nav.index}</Link>
      <Link href={'/infos'}>{nav.infos}</Link>
      <Link href={'/plans'}>{nav.plans}</Link>
      <Link href={'/about'}>{nav.about}</Link>
    </nav>
    <a href={sc.weiboHref} target="_blank"><i className="svg weibo"/></a>
    <button><i className="svg burger"/></button>
  </i>
}