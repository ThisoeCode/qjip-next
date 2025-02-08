import { Biframe, SteamLink } from "@/components/_client"
import Timeline from "@/components/timeline"
import { nav, works } from "@/script"

export const metadata={title:nav.works}

export default function _(){
  return<main id="works">
  <h2>企划一览</h2>
  <ol>
    <Timeline pinkTitle="2025年" hasNextLine>
      <i style={{flexDirection:'column',background:'blue'}}>
        <br/>1. test BiliIframe
        <Biframe bv={works.tmp.bv} style={{width:480,height:272}}/>
        2. test Steam protocol
        <SteamLink appId={works.tmp.appID}useLogo style={{width:30,height:30,cursor:'pointer'}}/>
      </i>
    </Timeline>
    <Timeline pinkTitle="时间轴测试" hasNextLine>
      <br/>3. test developer protocol
      <a href="steam://openurl/https://store.steampowered.com/developer/%E5%8D%83%E8%BF%B9%E5%88%B6%E4%BD%9C%E7%BB%84" style={{textDecoration:'underline',cursor:'pointer'}}>千迹制作组</a>
    </Timeline>
    <Timeline pinkTitle="test"> </Timeline>
  </ol></main>
}