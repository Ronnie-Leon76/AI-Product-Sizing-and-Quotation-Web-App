"use client"

import { useToast } from "@/components/ui/use-toast";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


const useSideBar = () => {
  const [expand, setExpand] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();


  const page = pathname.split("/").pop();
  const { signOut } = useClerk();

  const onSignOut = () => signOut(() => router.push("/"));

    const onExpand = () => setExpand((prev) => !prev); //Shrink and Expand SideBar
    return {
        expand,
        onExpand,
        page,
        onSignOut,
    }
}

export default useSideBar