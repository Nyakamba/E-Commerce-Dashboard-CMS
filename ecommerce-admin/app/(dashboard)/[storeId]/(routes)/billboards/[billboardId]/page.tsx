import prismadb from "@/lib/prismadb";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  let billboard = null;

  if (params.billboardId !== "new") {
    try {
      billboard = await prismadb.billboard.findUnique({
        where: {
          id: params.billboardId,
        },
      });
      if (!billboard) {
        throw new Error("Billboard not found");
      }
    } catch (error: any) {
      return "Billboard not found";
    }
  }

  return <div>Existing billborad: {billboard?.label}</div>;
};

export default BillboardPage;
