/*
  Warnings:

  - Added the required column `breed_id` to the `dofipedia_stuff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `dofipedia_stuff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dofipedia_comment` DROP FOREIGN KEY `dofipedia_comment_stuff_id_fkey`;

-- AlterTable
ALTER TABLE `dofipedia_anwser` MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `dofipedia_comment` MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `stuff_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `dofipedia_stuff` ADD COLUMN `breed_id` INTEGER NOT NULL,
    ADD COLUMN `type_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `dofipedia_comment` ADD CONSTRAINT `dofipedia_comment_stuff_id_fkey` FOREIGN KEY (`stuff_id`) REFERENCES `dofipedia_stuff`(`stuff_id`) ON DELETE SET NULL ON UPDATE CASCADE;
