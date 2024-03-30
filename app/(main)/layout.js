"use client";

import SideNavbar from "@/components/sidenav/sideNavbar";
import TopNavbar from "@/components/topnav/topNavbar";

function MainLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-full">
        <div className="flex w-full h-[65px] z-30 flex-row fixed inset-x-0">
          <TopNavbar />
        </div>
        <div className="hidden pt-[65px] h-full w-[72px] z-30 flex-col fixed inset-y-0">
          <SideNavbar />
        </div>
        <main className="px-4 pt-[65px] h-full">{children}</main>
      </body>
    </html>
  );
}

export default MainLayout;
