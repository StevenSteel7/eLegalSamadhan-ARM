'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAdminProtected() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session || session.user.role !== "admin") {
      router.push("/unauthorized"); // Redirect if not authorized
    } else {
      setIsAuthorized(true); // Authorized
    }
  }, [session, status, router]);

  return { isAuthorized, isLoading: status === "loading" };
}
