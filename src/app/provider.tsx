"use client";

import { TabsControlProvider } from "@/hooks/useTabsControl";
import { PropsWithChildren } from "react";

interface ProviderProps extends PropsWithChildren {}

export function Providers({ children }: ProviderProps) {
  return <TabsControlProvider>{children}</TabsControlProvider>;
}
