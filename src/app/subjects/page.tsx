'use client'

import { Header } from "../_components/Header";
import { ConfigurationTab } from "../_components/ConfigurationsTab";
import { UserTab } from "../_components/UserTab";
import { NavTab } from "../_components/NavTab";

import { TabsControlProvider } from "@/hooks/useTabsControl";
import { SearchBar } from "../_components/SearchBar";
import { FilterButton } from "../_components/FilterButton";

export default function Page() {
  return (
    <TabsControlProvider>
      <div className="relative h-full bg-[rgba(0,0,0,0.75)] p-6 overflow-hidden">
        <Header />
        <main>
          <h2 className="text-xl font-bold mb-12">Matérias disponiveis</h2>
          <div className="flex gap-4">
            <SearchBar />
            <FilterButton />
          </div>
          <section className="flex flex-wrap gap-6 mt-9 w-full">
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
            <div className="flex justify-center items-center w-[calc((100%-1.5rem)/2)] h-[calc((100vw-1.5rem)*3/8)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">Matéria</div>
          </section>
        </main>
        <ConfigurationTab />
        <UserTab />
        <NavTab />
      </div>
    </TabsControlProvider>
  );
}
