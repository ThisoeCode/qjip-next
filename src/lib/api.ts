import{NextResponse}from"next/server"
import{every}from"./ts"

export const

// 1. NextResponse.json
/** `NextResponse.json` */
NJ = (
  data:Record<string,every>,
  status:number = 200,
)=>NextResponse.json(data,{status})