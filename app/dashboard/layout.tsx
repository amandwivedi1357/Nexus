"use client";
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import { NavigationProvider } from "@/lib/context/navigation";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return (
        <NavigationProvider>

      <div>
         <div className="flex h-screen">
        <Authenticated>
          
          <Sidebar />
        </Authenticated>

        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
      </div>
        </NavigationProvider>
    );
  } 