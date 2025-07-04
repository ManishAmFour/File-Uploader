/*
  Warnings:

  - Added the required column `fileUrl` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "fileUrl" TEXT NOT NULL;
