import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image"; // ✅ Fixed import
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 ">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side - Logo */}
        <Link href="/">
          <Image
            src="/img.png"
            alt="Skillverse Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Right Side - Insights & User Controls */}
        <div className="flex items-center gap-6">
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">
                Industry Insights
                </span>
            
              </Button>
            </Link>
          </SignedIn>
          <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          {/* Authentication Section */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
