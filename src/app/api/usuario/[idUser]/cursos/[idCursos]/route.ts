import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma= new PrismaClient
export async function PUT(req: NextRequest, {params}: {params: Promise<{idCursos: string, idUser: string} > }){
    const {title, content}= await req.json();
    const id = (await params).idCursos
    const id_alumno = (await params).idUser
    const actualizar = await prisma.cursos.update({
        where:{
            id: Number(id), 
            id_alumno: Number(id_alumno) 
        }, 
        data:{ 
            title,
            content 
        }} )
    return NextResponse.json(actualizar)
}


export async function DELETE(req: NextRequest, {params}: {params: Promise<{idCursos: string, idUser: string} > }){
    const id = (await params).idCursos
    const id_alumno = (await params).idUser
    const curso_eliminado= await prisma.cursos.delete({
        where:{
            id: Number(id),
            id_alumno: Number(id_alumno)
        }
    })
    return NextResponse.json(curso_eliminado)

}