import Timeline from "@/components/timeline"
import { infos, nav } from "@/script"
import Ainfo from "@/components/ainfo"

export const metadata={title:nav.infos}

export default function _(){
  const
    grouped = infos.data.reduce((acc, info)=>{
      if(!acc[info.dt]) acc[info.dt]=[]
      acc[info.dt].push(info)
      return acc
    }, {} as Record<string, typeof infos.data>),

    timelines = Object.entries(grouped)
      .map(([dt, infos], i, array)=>(
        <Timeline key={'tl'+i}
          pinkTitle={dt.replace('.','年').replace('.','月')+'日'}
          hasNextLine={i!==array.length-1}
        >
          <Ainfo infos={infos}/>
        </Timeline>
      ))

  return<main id="infos">
    <ol>
      <h2>最新情报</h2>
      {timelines}
      </ol>
  </main>

}