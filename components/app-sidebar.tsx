"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { data } from "@/consts/RoleSidebar";

type ValidRole = "admin" | "student" | "teacher" | "guest";

interface AppSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    role?: ValidRole;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
  };
  variant?: "inset" | "sidebar" | "floating" | undefined;
}
export function AppSidebar({ user, variant }: AppSidebarProps) {
  const role = (user.role || "guest") as ValidRole;
  return (
    <Sidebar collapsible="offcanvas" variant={variant}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <div className="flex items-center gap-2">
                  <span className="border-2 border-primary px-3 py-0.5 rounded-md">
                    Experts
                  </span>
                  <span>Academy</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain userRole={role} items={data.navMain[role]} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            ...user,
            avatar: user.image || "",
            role: user.role || "guest",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
