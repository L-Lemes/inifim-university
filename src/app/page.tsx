"use client";
import { TabsControlProvider } from "@/hooks/useTabsControl";

import First from "./home/page";

export default function Page() {
  return (
    <TabsControlProvider>
      <First />
    </TabsControlProvider>
  );
}
