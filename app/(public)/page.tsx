import HeroSection from "@/app/(public)/_components/HeroSection";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <HeroSection />
      {session ? session.user.email : "not logged in"}
    </div>
  );
}
