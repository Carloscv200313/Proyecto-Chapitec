import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient

export async function POST(req: NextRequest) {
    const { nombre, user, pasword } = await req.json();
    const unico = await prisma.alumnos.findUnique({
        where: { user }
    })
    if (unico) {
        console.log(unico)
        return NextResponse.json("YA EXISTE UN USUARIO CON ESE USUARIO")
    }
    const nuevo_pasword = await bcrypt.hash(pasword, 10);
    await prisma.alumnos.create({
        data: {
            nombre,
            user,
            pasword:nuevo_pasword
        }
    })
    return NextResponse.json({ nombre, user, pasword })
}