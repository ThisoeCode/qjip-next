import { NJ } from "@/lib/api"

export async function GET(){
  return NJ({
    title:'千迹制作组官网',
    ping:'PONG!',
  })
}