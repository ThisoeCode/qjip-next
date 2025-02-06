import { Biframe, BV, SteamLink } from "@/components/_client"
import { nav, plans } from "@/script"

export const metadata={title:nav.plans}

export default function _(){
  return<main id="plans">
    企划一览
    <i style={{flexDirection:'column'}}>
      1. test BiliIframe
      <Biframe url={plans.tmp.bi}/>
      2. test componented bili frame
      <BV bv={plans.tmp.bv}/>
      3. test Steam protocol
      <SteamLink appId={plans.tmp.appID}useLogo style={{width:30,height:30,cursor:'pointer'}}/>
      4. test developer protocol
      <a href="steam://openurl/https://store.steampowered.com/developer/%E5%8D%83%E8%BF%B9%E5%88%B6%E4%BD%9C%E7%BB%84" style={{textDecoration:'underline',cursor:'pointer'}}>千迹制作组</a>
    </i>
  </main>
}