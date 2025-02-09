import { banner } from "@/script"
import H1 from "./h1-link"
import Nav from "./nav"

export default function Banner(){
  const
    c = banner.bgColor,
    backgroundColor=`rgba(${c[0]},${c[1]},${c[2]},${c[3]})`
  
  return<header style={{backgroundColor}}>
    <H1/>
    <Nav bgc={backgroundColor}/>
  </header>
}