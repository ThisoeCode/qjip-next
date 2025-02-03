import Link from "next/link"

export default function Banner(){
  return<nav>
    <Link href={'/'}>首页</Link>
    <Link href={'/infos'}>最新情报</Link>
    <Link href={'/plans'}>企划一览</Link>
    <Link href={'/about'}>关于我们</Link>
  </nav>
}