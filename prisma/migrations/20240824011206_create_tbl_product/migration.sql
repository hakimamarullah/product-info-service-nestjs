-- CreateTable
CREATE TABLE "tbl_product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "price" DOUBLE PRECISION NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tbl_product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tbl_product_name_idx" ON "tbl_product"("name");
