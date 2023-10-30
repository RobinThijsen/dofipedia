import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const GET = async (req: { body: string }) => {
    const body = JSON.parse(req.body)
    const { item_id } = body

    const comments = await prisma.dofipedia_comment.findMany({
        where: { item_id: parseInt(item_id) }
    })

    if (!comments) return NextResponse.json({ comments: null, message: "Something went wrong" }, { status: 500, statusText: "Something went wrong, please try again later" })

    return NextResponse.json({ comments: comments, message: "Comments query successfully" }, { status: 200 })
}

export const GET_MANY = async () => {

}

export const POST = async (req: { body: string }) => {
    const body = JSON.parse(req.body)
    const { content, author_email, item_id } = body

    const user = await prisma.dofipedia_user.findUnique({
        where: { email: author_email }
    })

    if (!user) return NextResponse.json({ user: null, message: "User not found" }, { status: 404, statusText: "User with this email doesn't exist" })

    const newComment = await prisma.dofipedia_comment.create({
        data: { content: content, author_id: user?.user_id, item_id: parseInt(item_id) }
    })

    if (!newComment) return NextResponse.json({ comment: null, message: "Something went wrong" }, { status: 500, statusText: "Something went wrong, please try again later" })

    return NextResponse.json({ comment: newComment, message: "Comment create successfully" }, { status: 201 })
}

export const DELETE = async (req: { body: string }) => {
    const body = JSON.parse(req.body)
    const { comment_id } = body

    const isDelete = await prisma.dofipedia_comment.delete({
        where: { comment_id: comment_id }
    })

    if (!isDelete) return NextResponse.json({ comment: comment_id, message: "Something went wrong" }, { status: 500, statusText: "Something went wrong, try again later" })

    return NextResponse.json({ comment: null, message: "comment delete successfully" }, { status: 202 })
}

export default {
    GET,
    POST,
    DELETE
}