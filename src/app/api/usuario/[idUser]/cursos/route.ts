import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"
const prisma = new PrismaClient
export async function POST(req: NextRequest, { params }: { params:Promise<{ idUser: string }> }){
    const id_alumno= (await params).idUser
    const {title, content}= await req.json();
    const existe = await prisma.alumnos.findUnique({
        where: {id: Number(id_alumno)}
    })
    if(!existe ){
        return NextResponse.json("no existe el alumno")
    }
    const curso = await prisma.cursos.create({
        data: {
            title,
            content, 
            id_alumno: Number(id_alumno)
        }
    })
    return NextResponse.json(curso)
}