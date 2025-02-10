import { InfoScript } from "@/lib/ts"

export default function Ainfo({infos}:{infos:InfoScript[]}){
  return<i className="ainfo">
    <i>
      {infos.map((info,j)=>(
        <h3 key={'t'+j}>{info.title}</h3>
      ))}
    </i>
    <ul>
      {infos.map((info,j)=>(
        <li key={'c'+j}>{info.ctt}</li>
      ))}
    </ul>
  </i>
}