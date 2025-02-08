import { banner } from "@/script"
import Image from "next/image"

export default function H1(){
  return<a id="h1" href='https://qjip.net/'>
    <Image alt="logo"
      src={'/logo/50.png'}
      width={50}
      height={50}
    />
    <i>
      <h1>{banner.h1}</h1>
      <label>{banner.hl}</label>
    </i>
  </a>
}