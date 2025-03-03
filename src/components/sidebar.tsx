"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Users, Shield, AppWindow, IdCard } from "lucide-react";

const navItems = [
  { href: "/", label: "Autorizacije", icon: IdCard },
  { href: "/role", label: "Role", icon: Shield },
  { href: "/aplikacije", label: "Aplikacije", icon: AppWindow },
  { href: "/korisnici", label: "Korisnici", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gradient-to-b from-gray-300 to-white h-full border border-r-2 shadow-xl shadow-black fixed">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === item.href && "bg-gray-200"
                )}
              >
                <Link href={item.href} className="text-xl text-gray-700">
                  <item.icon className="mr-2 h-10 w-10" />
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
