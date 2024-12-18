import prismadb from "@/lib/prismadb";
import ColorForm from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  let color = null;

  if (params.colorId !== "new") {
    try {
      color = await prismadb.color.findUnique({
        where: {
          id: params.colorId,
        },
      });
      if (!color) {
        throw new Error("Color not found");
      }
    } catch (error: any) {
      return "Color not found";
    }
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
