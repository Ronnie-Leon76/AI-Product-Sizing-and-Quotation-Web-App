"use server";

import { client } from "@/lib/prisma";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";


export const onCompleteUserRegistration = async (
  fullname: string,
    clerkId: string,
  email: string
) => {
  try {
    const registered = await client.user.create({
      data: {
        fullname,
            clerkId,
            email,
      },
      select: {
        fullname: true,
        id: true,
      },
    });

    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    return { status: 400 };
  }
};

export const onLoginUser = async () => {
  const user = await currentUser();
  if (!user) redirectToSignIn();
  else {
    try {
      const authenticated = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          fullname: true,
          id: true,
        },
      });
      if (authenticated) {
        return { status: 200, user: authenticated };
      }
    } catch (error) {
      return { status: 400 };
    }
  }
};
