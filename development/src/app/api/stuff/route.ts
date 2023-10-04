import type { Request } from "next/dist/compiled/@edge-runtime/primitives"
import { prisma } from "@/lib/prisma"

export async function GET(param: { breedId: string; typeId: string}) {
    return param
    //const stuff = await prisma.dofipedia_stuff.findMany()
    //return stuff
}