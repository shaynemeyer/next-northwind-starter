"use client";

import * as React from "react";
import { Ship } from "lucide-react";

import { NavCatalog } from "@/components/nav-catalog";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { catalog, management } from "@/lib/constants/navItems";
import { NavManagement } from "./nav-management";

// TODO: Exercise 4 - Add the GlobalSearch component to the sidebar
//
// Import at the top:
// import { GlobalSearch } from "@/components/global-search"
//
// Add it in the sidebar, after SidebarHeader and before SidebarContent:
// <SidebarHeader>
//   <TeamSwitcher teams={data.teams} />
// </SidebarHeader>
//
// <GlobalSearch />  ← Add this line
//
// <SidebarContent>
//   {/* rest of content */}
// </SidebarContent>

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Ship className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Northwind</span>
                  <span className="truncate text-xs">Traders</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavCatalog catalog={catalog} />
        <NavManagement management={management} />
      </SidebarContent>
    </Sidebar>
  );
}
