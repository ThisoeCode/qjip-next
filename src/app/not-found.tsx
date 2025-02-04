'use client'
import { useEffect } from "react"

export default function NF(){
  useEffect(()=>{
    setTimeout(()=>{window.location.replace('/#404')},1)
  },[])
  return<main id="nf404"/>
}