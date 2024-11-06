-- CreateTable
CREATE TABLE "Alumnos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "pasword" TEXT
);

-- CreateTable
CREATE TABLE "Cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "id_alumno" INTEGER NOT NULL,
    CONSTRAINT "Cursos_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "Alumnos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumnos_user_key" ON "Alumnos"("user");
