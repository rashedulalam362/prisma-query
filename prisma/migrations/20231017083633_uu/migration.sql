-- CreateTable
CREATE TABLE `product_reivew` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(40) NOT NULL,
    `rating` VARCHAR(20) NOT NULL,
    `content` VARCHAR(30) NOT NULL,
    `prodcutId` BIGINT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_reivew` ADD CONSTRAINT `product_reivew_prodcutId_fkey` FOREIGN KEY (`prodcutId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
