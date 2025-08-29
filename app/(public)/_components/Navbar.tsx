"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import UserDropDown from "./UserDropDown";
import { toast } from "sonner";

const navigationLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/courses", label: "من نحن؟" },
  { href: "/courses", label: "عروضنا" },
  { href: "/courses", label: "أستاذتنا" },
  { href: "/courses", label: "إتصل بنا" },
].reverse();

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  async function SignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
        onError: () => {
          toast.error("حدث خطأ ما، حاول مرة أخرى.");
        },
      },
    });
  }
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-primary"
          >
            <div className="flex items-center gap-2">
              <span className="border-2 border-primary px-3 py-0.5 rounded-md">
                Experts
              </span>
              <span>Academy</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 text-primary text-lg">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          {isPending ? null : session ? (
            <UserDropDown user={session.user} signOut={SignOut} />
          ) : (
            <Link href="/login" className="cursor-pointer">
              <Button size="lg" className="cursor-pointer font-medium  ">
                دخول
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 text-primary border-2 border-primary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-accent border-l-blue-900/20 p-0 overflow-y-auto !pr-0 "
            >
              <style jsx global>{`
                button[aria-label="Close"] {
                  display: none;
                }
              `}</style>
              <div className="flex justify-between items-center px-6 py-4 border-b border-blue-900/20 sticky top-0 bg-accent z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-900/10 text-blue-900"
                  onClick={() =>
                    document.dispatchEvent(
                      new KeyboardEvent("keydown", { key: "Escape" })
                    )
                  }
                >
                  <X className="h-6 w-6" />
                </Button>
                <SheetTitle className="text-primary text-right text-2xl font-bold">
                  القائمة
                </SheetTitle>
              </div>
              <div className="flex flex-col space-y-8 items-end px-6 pt-8 min-h-[calc(100vh-5rem)]">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg text-primary hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-6 w-full mt-12 items-end border-t border-blue-900/20 pt-8">
                  {session ? (
                    <Button onClick={SignOut} className="w-full">
                      خروج
                    </Button>
                  ) : (
                    <Link href="/login" className="w-full mb-4">
                      <button className="w-full cursor-pointer border-2 font-medium text-primary border-primary px-8 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                        دخول
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
