import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/category-form";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  let category = null;

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  if (params.categoryId !== "new") {
    try {
      category = await prismadb.category.findUnique({
        where: {
          id: params.categoryId,
        },
      });

      if (!category) {
        throw new Error("Category not found");
      }
    } catch (error: any) {
      return "Category not found";
    }
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
