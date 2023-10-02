-- CreateTable
CREATE TABLE `dofipedia_user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `pseudo` VARCHAR(60) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `dofipedia_user_name_key`(`name`),
    UNIQUE INDEX `dofipedia_user_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dofipedia_stuff` (
    `stuff_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `hat_id` INTEGER NOT NULL,
    `cape_id` INTEGER NOT NULL,
    `belt_id` INTEGER NOT NULL,
    `boot_id` INTEGER NOT NULL,
    `charm_id` INTEGER NOT NULL,
    `ring1_id` INTEGER NOT NULL,
    `ring2_id` INTEGER NOT NULL,
    `shield_id` INTEGER NOT NULL,
    `weapon_id` INTEGER NOT NULL,
    `trophy1_id` INTEGER NOT NULL,
    `trophy2_id` INTEGER NOT NULL,
    `trophy3_id` INTEGER NOT NULL,
    `trophy4_id` INTEGER NOT NULL,
    `trophy5_id` INTEGER NOT NULL,
    `trophy6_id` INTEGER NOT NULL,
    `familier_id` INTEGER NOT NULL,
    `mount_id` INTEGER NOT NULL,
    `author_id` INTEGER NOT NULL,

    PRIMARY KEY (`stuff_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dofipedia_comment` (
    `comment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `author_id` INTEGER NOT NULL,
    `item_id` INTEGER NULL,
    `stuff_id` INTEGER NOT NULL,

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dofipedia_anwser` (
    `anwser_id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `comment_id` INTEGER NOT NULL,

    PRIMARY KEY (`anwser_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dofipedia_stuff` ADD CONSTRAINT `dofipedia_stuff_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `dofipedia_user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dofipedia_comment` ADD CONSTRAINT `dofipedia_comment_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `dofipedia_user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dofipedia_comment` ADD CONSTRAINT `dofipedia_comment_stuff_id_fkey` FOREIGN KEY (`stuff_id`) REFERENCES `dofipedia_stuff`(`stuff_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dofipedia_anwser` ADD CONSTRAINT `dofipedia_anwser_comment_id_fkey` FOREIGN KEY (`comment_id`) REFERENCES `dofipedia_comment`(`comment_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
