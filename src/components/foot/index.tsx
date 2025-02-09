import { foot } from "@/script"

export default function Foot(){
  return<footer>
    <p>{foot.copyright}</p>
    <a href={foot.beianHref}target="_blank">{foot.beian}</a>
  </footer>
}