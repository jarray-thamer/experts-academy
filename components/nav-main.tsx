"use client";

import { IconCirclePlusFilled, type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
  userRole,
}: {
  userRole: string;
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {userRole === "admin" || userRole === "teacher" ? (
            <SidebarMenuItem className="flex items-center gap-2">
              <Link href="/courses/new" className="w-full cursor-pointer">
                <SidebarMenuButton
                  tooltip="Quick Create"
                  className="bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-12 duration-200 ease-linear"
                >
                  <IconCirclePlusFilled />
                  <span>إنشاء درس جديد</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ) : null}
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
