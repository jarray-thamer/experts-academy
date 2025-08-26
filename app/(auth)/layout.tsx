import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-[#FCF8DD]">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {children}
        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <span className="cursor-pointer hover:underline hover:text-primary">
            Terms of service
          </span>{" "}
          and{" "}
          <span className="hover:underline cursor-pointer hover:text-primary">
            Privacy Policy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
