import Timeline from "@/components/timeline"
import { nav, works } from "@/script"
import Awork from "@/components/awork"

export const metadata={title:nav.works}

export default function _(){
  const timelines = Object.entries(works.data)
    .map(([key, work], i, array)=>(
      <Timeline
        key={key}
        pinkTitle={work.releaseDate}
        hasNextLine={i!==array.length-1}
      >
        <Awork script={work}/>
      </Timeline>
    ))

  return<main id="works">
    <h2>企划一览</h2>
    <ol>{timelines}</ol>
  </main>
}