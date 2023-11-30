-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "lessons" TEXT NOT NULL,
    "description1" TEXT NOT NULL,
    "description2" TEXT,
    "duration" TEXT NOT NULL,
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CourseContent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "duration" TEXT
);
