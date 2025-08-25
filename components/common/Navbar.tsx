"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FCF8DD]">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-blue-900"
          >
            <div className="flex items-center gap-2">
              <span className="border-2 border-blue-900 px-3 py-0.5 rounded-md">
                Experts
              </span>
              <span>Academy</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 text-blue-900 text-lg">
          <Link href="/courses" className=" hover:text-gray-900">
            إتصل بنا
          </Link>
          <Link href="/courses" className=" hover:text-gray-900">
            أستاذتنا
          </Link>
          <Link href="/courses" className=" hover:text-gray-900">
            عروضنا
          </Link>
          <Link href="/courses" className=" hover:text-gray-900">
            من نحن؟
          </Link>
          <Link href="/" className=" hover:text-gray-900">
            الرئيسية
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/auth/login" className="cursor-pointer">
            <button className="text-blue-900 cursor-pointer">دخول</button>
          </Link>
          <Link href="/auth/register" className="cursor-pointer">
            <button className="cursor-pointer border-2 font-medium text-blue-900 border-blue-900 px-8 py-1 rounded-md hover:bg-blue-900 hover:text-white transition-colors duration-200 ease-in-out">
              سجل مجانا
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-900/10 text-blue-900 border-2 border-blue-900"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#FCF8DD] border-l-blue-900/20 p-0 overflow-y-auto !pr-0 "
            >
              <style jsx global>{`
                button[aria-label="Close"] {
                  display: none;
                }
              `}</style>
              <div className="flex justify-between items-center px-6 py-4 border-b border-blue-900/20 sticky top-0 bg-[#FCF8DD] z-10">
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
                <SheetTitle className="text-blue-900 text-right text-2xl font-bold">
                  القائمة
                </SheetTitle>
              </div>
              <div className="flex flex-col space-y-8 items-end px-6 pt-8 min-h-[calc(100vh-5rem)]">
                <Link
                  href="/"
                  className="text-lg text-blue-900 hover:text-gray-900"
                >
                  الرئيسية
                </Link>
                <Link
                  href="/courses"
                  className="text-lg text-blue-900 hover:text-gray-900"
                ></Link>
                <Link
                  href="/courses"
                  className="text-lg text-blue-900 hover:text-gray-900"
                >
                  من نحن؟
                </Link>
                <Link
                  href="/courses"
                  className="text-lg text-blue-900 hover:text-gray-900"
                >
                  عروضنا
                </Link>
                <Link
                  href="/courses"
                  className="text-lg text-blue-900 hover:text-gray-900"
                >
                  أستاذتنا
                </Link>
                <Link
                  href="/courses"
                  className="text-lg text-blue-900 hover:text-gray-900"
                >
                  إتصل بنا
                </Link>
                <div className="flex flex-col space-y-6 w-full mt-12 items-end border-t border-blue-900/20 pt-8">
                  <Link
                    href="/auth/login"
                    className="text-blue-900 text-lg mx-auto font-medium pr-2"
                  >
                    دخول
                  </Link>
                  <Link href="/auth/register" className="w-full mb-4">
                    <button className="w-full cursor-pointer border-2 font-medium text-blue-900 border-blue-900 px-8 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors duration-200 ease-in-out">
                      سجل مجانا
                    </button>
                  </Link>
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
