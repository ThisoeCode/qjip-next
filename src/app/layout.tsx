import{type Metadata}from"next"
import"./thisoe.css"
import { layout } from "@/script"
import Banner from "@/components/banner"

export const metadata:Metadata={
  title: {
    template: layout.metadata.template,
    default: layout.metadata.default,
    // absolute: '',
  },
  description: layout.metadata.description,
}

export default function _({children}:Readonly<{
  children: React.ReactNode,
}>){
  return<html lang="zh-Hans">
    <body>
      <Banner/>
      {children}
    </body>
  </html>
}
