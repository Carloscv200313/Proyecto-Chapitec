import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"
const prisma = new PrismaClient

export async function GET( req: NextRequest,{ params }: { params:Promise<{ idUser: string }> }){
    const {idUser}=  await params;
    const cursos = await prisma.alumnos.findUnique({
            where:{id: Number(idUser)},
            include: {cursos :true}
        })
    return NextResponse.json(cursos?.cursos)
}
