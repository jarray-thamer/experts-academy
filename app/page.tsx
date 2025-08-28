"use client";
import HeroSection from "@/components/common/HeroSection";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();
  return (
    <div>
      <HeroSection />
      {session ? session.user.email : "not logged in"}
    </div>
  );
}
