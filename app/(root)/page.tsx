import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />
      <Link href={"/dashboard"}>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
