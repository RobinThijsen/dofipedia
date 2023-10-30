import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import {Prisma, PrismaClient} from "@prisma/client"

import { hash } from "bcrypt"
import { prisma } from "@/lib/prisma"
import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {afterWrite} from "@popperjs/core";

export async function GET() {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ authenticated: !!session, session: session })
}

export async function GET_USER(request: { body: string }) {
    const body = JSON.parse(request.body)
    const { user_id } = body

    const user = await prisma.dofipedia_user.findUnique({
        where: { user_id: user_id }
    })

    if (!user) return NextResponse.json({ user: null, message: "User not found" }, { status: 404, statusText: "User with this id doesn't exist" })

    const { password: hashPassword, ...rest } = user

    return NextResponse.json({ user: rest, message: "User found successfully" }, { status: 200 })
}

export async function POST(request: { body: string }) {
    const body = JSON.parse(request.body)
    const { name, pseudo, email, password, confirmPassword } = body
    if (password != confirmPassword) return NextResponse.json({ user: null, message: "different password" }, { status: 209 })

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

    return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 200 })
}

export async function PUT(request: Request) {

    try {
        // body
        const body = await request.json()
        const { id, pseudo, email, password } = body

        const existingUserById: Prisma.Prisma__dofipedia_userClient<{
            user_id: number;
            name: string;
            pseudo: string;
            email: string,
            password: string
        } | null, null> = prisma.dofipedia_user.findUnique({
            where: {
                user_id: id
            }
        })

        if (!existingUserById) return NextResponse.json({ user: null, message: "User with this email not exists" }, { status: 409 })

        let isUpdate: Prisma.Prisma__dofipedia_userClient<any> | boolean = true

        let isPseudoUpdating = false
        if (pseudo != existingUserById.pseudo) isPseudoUpdating = true

        if (!isUpdate) return NextResponse.json({ user: null, message: "Something went wrong" }, { status: 408 })
        let isEmailUpdating = false

        if (email != existingUserById.email) isEmailUpdating = true

        let data: { pseudo?: string; email?: string } = {
            pseudo: existingUserById.pseudo,
            email: existingUserById.email
        }

        if (isPseudoUpdating) data.pseudo = pseudo
        if (isEmailUpdating) data.email = email

        const updatedUser = prisma.dofipedia_user.update({
            where: { user_id: id },
            data: data
        })

        if (!updatedUser) return NextResponse.json({ user: null, message: "Something went wrong"}, { status: 500 })
        
        return NextResponse.json({ user: updatedUser, message: "User updated successfully" }, { status: 200 })
    } catch(e) {
        console.log(e)
    }
}