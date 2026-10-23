-- CreateTable
CREATE TABLE "career_applications" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "position" TEXT,
    "message" TEXT,
    "resumeOriginalName" TEXT,
    "resumeStoredName" TEXT,
    "resumeMimeType" TEXT,
    "resumeSizeBytes" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "career_applications_pkey" PRIMARY KEY ("id")
);
