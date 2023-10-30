import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"

import { NextResponse } from "next/server"

import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { prisma } from "@/lib/prisma"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/api/auth/login",
        error: "/api/auth/error"
    },
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            type: 'credentials',
            credentials: {},
            async authorize(credentials: { email: string; password: string }) {
                // check if got value from credentials
                if (!credentials?.email || !credentials?.password) return NextResponse.json({ user: null, message: "Empty input" }, { status: 109 })

                // check if user in DB by email
                const user = await prisma.dofipedia_user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (user == null) return null

                const isPasswordValid = await compare(credentials.password, user.password)
                console.log(isPasswordValid)

                if (!isPasswordValid) return null

                return user
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, name: user.name, pseudo: user.pseudo }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                    name: token.name,
                    pseudo: token.pseudo
                }
            }
        }
    }
}