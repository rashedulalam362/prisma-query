-- CreateTable
CREATE TABLE `product_meta` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(20) NOT NULL,
    `content` VARCHAR(20) NOT NULL,
    `productId` BIGINT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_meta` ADD CONSTRAINT `product_meta_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
