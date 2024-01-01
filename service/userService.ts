import prisma from "@/lib/prisma-client";

export const getUser = async (id: string) => {
  return await prisma.user.findFirst({
    where: { id: id },
  });
};
