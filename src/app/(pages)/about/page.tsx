import { about, nav } from "@/script"

export const metadata={title:nav.about}

export default function _(){
  return<main id="about">
    <h2>关于我们</h2>
    <p>{about.tmpBlock.ctt}</p>
    <ol>
      {about.tmpBlock.links.map((link, i)=>(
        <li key={i}>
          <a href={link.href} target="_blank">{link.label}</a>{/* rel="noopener noreferrer"*/}
        </li>
      ))}
    </ol>
  </main>
}