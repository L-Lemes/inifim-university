"use client";
import { TabsControlProvider } from "@/hooks/useTabsControl";

import House from "./home/page";

export default function Home() {
  return (
    <TabsControlProvider>
      <House />
    </TabsControlProvider>
  );
}
