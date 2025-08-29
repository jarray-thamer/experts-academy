import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    // toast.error("يجب عليك تسجيل الدخول للوصول إلى هذه الصفحة");
    redirect("/login");
  }
  return <div>{children}</div>;
};

export default layout;
