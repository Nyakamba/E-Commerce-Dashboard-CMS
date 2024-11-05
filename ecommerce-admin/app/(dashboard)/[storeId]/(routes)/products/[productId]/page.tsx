import prismadb from "@/lib/prismadb";
import ProductForm from "./components/product-form";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  let product = null;

  if (params.productId !== "new") {
    try {
      product = await prismadb.product.findUnique({
        where: {
          id: params.productId,
        },
        include: { images: true },
      });
      if (!product) {
        throw new Error("Product not found");
      }
    } catch (error: any) {
      return "Product not found";
    }
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
