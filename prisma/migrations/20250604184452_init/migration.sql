-- CreateTable
CREATE TABLE "ImgData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,

    CONSTRAINT "ImgData_pkey" PRIMARY KEY ("id")
);
