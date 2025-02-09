import"./thisoe.css"
import"./svg.css"
import{Noto_Serif_SC}from"next/font/google"
import{type Metadata}from"next"
import { metadata as sc } from "@/script"
import Banner from "@/components/banner"
import Foot from "@/components/foot"

const Serif = Noto_Serif_SC({subsets:['latin']})

export const metadata:Metadata={
  title: {
    template: sc.template,
    default: sc.default,
    // absolute: '',
  },
  description: sc.description,
}

export default function _({children}:Readonly<{
  children: React.ReactNode,
}>){
  return<html lang="zh-Hans" className={Serif.className}>
    <body>
      <Banner/>
      <div id="main-bg">
        {children}
        <Foot/>
      </div>
    </body>
  </html>
}
