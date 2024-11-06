import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient
export async function POST(req: NextRequest){
    const {user, pasword} = await req.json()
    const validar_user = await prisma.alumnos.findUnique({
        where:{user}
    })
    if(!validar_user){
        return NextResponse.json("USUARIO NO ENCONTRADO")
    }
    if(validar_user.pasword){
        const validar_contraseña = await bcrypt.compare(pasword, validar_user.pasword)
        if(validar_contraseña){
            return NextResponse.json(validar_user)
        }
        return NextResponse.json("CONTRASEÑA INCORRECTA")
    }
}