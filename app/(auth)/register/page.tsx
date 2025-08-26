"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Google } from "developer-icons";
import { Loader2Icon } from "lucide-react";
import React, { useTransition } from "react";
import { toast } from "sonner";

const RegisterPage = () => {
  const [googleSignInPending, startGoogleSignInTransition] = useTransition();

  async function signInWithGoogle() {
    startGoogleSignInTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("تم تسجيل الدخول بنجاح");
          },
          onError: () => {
            toast.error("فشل في تسجيل الدخول");
          },
        },
      });
    });
  }
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle className="text-xl ">مرحباً بعودتك</CardTitle>
        <CardDescription>
          سجل الدخول باستخدام حساب Google الخاص بك
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          disabled={googleSignInPending}
          onClick={signInWithGoogle}
          className="w-full"
          variant="outline"
        >
          {googleSignInPending ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              <span> إنتظر قليلا</span>
            </>
          ) : (
            <>
              سجل دخول بإستخدام حساب Google
              <Google />
            </>
          )}
        </Button>
        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              أو أكمل باستخدام البريد الإلكتروني
            </span>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input type="email" placeholder="m@example.com" />
          </div>
          <Button>تسجيل</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
