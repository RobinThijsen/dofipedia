import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { PrismaClient } from "@prisma/client"

import { hash } from "bcrypt"
import { prisma } from "@/lib/prisma"

export async function GET() {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ authenticated: !!session, session: session })
}

export async function POST(request: Request) {

    try {
        const body = await request.json()
        const { name, pseudo, email, password } = body
        const hashPassword = await hash(password, 12)

        const existingUserByEmail = await prisma.dofipedia_user.findUnique({
            where: { email: email }
        })

        if (existingUserByEmail) return NextResponse.json({ user: null, message: "User with this email already exists"}, { status: 409 })

        const existingUserByName = await prisma.dofipedia_user.findUnique({
            where: { name: name }
        })

        if (existingUserByName) return NextResponse.json({ user: null, message: "User with this name already exists"}, { status: 409 })

        const newUser = await prisma.dofipedia_user.create({
            data: {
                name,
                pseudo,
                email,
                password: hashPassword
            }
        })

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ error: e, message: "Something went wrong!" }, { status: 500 })
    }
}