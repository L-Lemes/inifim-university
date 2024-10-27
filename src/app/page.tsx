"use client";

import { Header } from "./_components/Header";
import { ConfigurationTab } from "./_components/ConfigurationsTab";
import { UserTab } from "./_components/UserTab";
import { NavTab } from "./_components/NavTab";

import { TabsControlProvider, useTabsControl } from "@/hooks/useTabsControl";

import { CarouselSection } from "./_components/CarouselSection";
import { SearchBar } from "./_components/SearchBar";
import House from "./home/page";

export default function Home() {
  return (
    <TabsControlProvider>
      <House />
    </TabsControlProvider>
  );
}
