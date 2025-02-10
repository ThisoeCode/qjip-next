import { works } from "@/script"
import { Biframe, SteamLink } from "./_client"
import { AworkScript } from "@/lib/ts"
import Image from "next/image"

export default function Awork({script}:{
  script:AworkScript,
}){
  return<q className='awork'>
    <i>
      <div style={{backgroundImage:`url(/${script.dir}/main.png)`}}/>
      <i>
        <i>
          <p>标题：{script.title}</p>
          <p>元素：{script.elem}</p>
          <p>类型：{script.cate}</p>
        </i>
        <i>
          <p>平台：{script.platform}</p>
          <p>价格：{script.price}</p>
        </i>
      </i>
    </i>

    <i>
      <h3>主要 Staff</h3>
      <q>
        {script.staff.map((staff,i)=><>
          <p key={i}>{staff.job}</p>
          <q key={'n'+i}>{staff.name}</q>
        </>)}
      </q>
      <div className="smol" style={{backgroundImage:`url(/${script.dir}/smol1.png)`}}/>
    </i>

    <i>
      <div><Biframe bv={script.biliBV_main}/></div>
      <a /* TODO: onClick={()=>{MORE VODS}} */>更多相关视频<i className="goto svg"/></a> {/* TODO: 相关视频btn */}
    </i>

    <i>
      <h3>Steam商店</h3>
      <SteamLink appId={script.steamID}><i className="steam svg"/></SteamLink>
      <a href={`https://store.steampowered.com/app/${script.steamID}`} target='_blank'>网页版<i className="goto svg"/></a>
      <div className="smol" style={{backgroundImage:`url(/${script.dir}/smol2.png)`}}/>
    </i>

    <i>
      <h3>周边贩售微店</h3>
      <Image className='weshop' src='/weshop.png' alt='微店二维码' width={99} height={99}/>
      <a href={works.weshopURL} target='_blank'>网页版<i className="goto svg"/></a>
    </i>


    {script.manga?
    <i className='manga'>
      <h3>阅读衍生小说及漫画</h3>
      {/* TODO: 漫画区块 */}
      <p style={{margin:'auto',paddingBottom:'1em',fontFamily:'sans-serif'}}>建设中……<br/>敬请期待～！</p>
      <div className="smol" style={{backgroundImage:`url(/${script.dir}/smol3.png)`}}/>
    </i>:null

    }

  </q>
}