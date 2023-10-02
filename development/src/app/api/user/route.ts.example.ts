import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { PrismaClient } from "@prisma/client"

import { hash } from "bcrypt"
import * as zod from "zod";

const userSchema = zod.object({
    name: zod.string()
        .min(4, "Entre 4 et 20 charactères")
        .max(20, "Entre 4 et 20 charactères"),
    pseudo: zod.string()
        .min(4, "Entre 4 et 20 charactères")
        .max(20, "Entre 4 et 20 charactères"),
    email: zod.string()
        .email("L'email est invalide"),
    password: zod.string()
        .min(8, "Plus long que 8 charactères")
        .regex(new RegExp(".*[a-z].*"), 'Le mot de passe doit contenir au moins 1 minuscule')
        .regex(new RegExp(".*[A-Z].*"), 'Le mot de passe doit contenir au moins 1 majuscule')
        .regex(new RegExp(".*\\d.*"), 'Le mot de passe doit contenir au moins 1 chiffre')
        .regex(
            new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
            "Le mot de passe doit contenir au moins 1 charactère spécial"
        ),
    confirmPassword: zod.string()
        .min(8, "Plus long que 8 charactères")
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Les mot de passes sont différents",
})

export async function GET() {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ authenticated: !!session, session: session })
}

export async function POST(request: Request) {
    const prisma = new PrismaClient()
    const body = await request.json()
    const { name, pseudo, email, password } = userSchema.parse(body);
    const hashPassword = await hash(password, 12)

    try {
        const isAlreadyExistingByEmail = await prisma.dofipedia_user.findUnique({where: {email: email}})
        if (isAlreadyExistingByEmail) return NextResponse.json({ user: null, message: "Cet email est déjà utilisé"}, { status: 209 })

        const isAlreadyExistingByName = await prisma.dofipedia_user.findUnique({where: {name: name}})
        if (isAlreadyExistingByName) return NextResponse.json({ user: null, message: "Ce nom est déjà pris"}, { status: 209 })

        const newUser = await prisma.dofipedia_user.create({
            data: {
                name,
                pseudo,
                email,
                password: hashPassword,
            }
        })

        if (!newUser) return NextResponse.json({ user: null, message: "Un problème à été rencontré" }, { status: 500 })

        return NextResponse.json({ user: newUser, message: null }, { status: 200 })
    } catch(error) {
        return error
    }
}