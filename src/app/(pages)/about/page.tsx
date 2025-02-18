import { about, nav } from "@/script"

export const metadata={title:nav.about}

export default function _(){
  return<main id="about">
    <i className="bg"/>
    <i id='tatie'/> <h3>Qiji<br/>Production</h3>
    <i id="tmp">
      <h2>{about.tmpBlock.title}</h2>
      <p>{
        about.tmpBlock.ctt.split('\n').map((para,i)=>
          <span className="para" key={`p${i}`}>
            {para.split('*').map((text,j)=>
              j%2 ? <span className="mark" key={j}>{text}</span> : text
            )}
          </span>
        )
      }</p>
      <ol>
        {about.tmpBlock.links.toReversed().map((link, i)=>(
          <li key={i} className="pink_title">
            <i/><hr/><p>
              <a
                href={link.href||undefined}
                target="_blank"
                rel="noopener noreferrer">
                  {link.label}
              </a>
            </p>
          </li>
        ))}
      </ol>
    </i>
  </main>
}