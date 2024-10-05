import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SetupLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) redirect(`/${store.id}`);
  return <div>{children}</div>;
};
//some comment

export default SetupLayout;
