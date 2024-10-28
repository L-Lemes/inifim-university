"use client";

import { Header } from "../_components/Header";
import { ConfigurationTab } from "../_components/ConfigurationsTab";
import { UserTab } from "../_components/UserTab";
import { NavTab } from "../_components/NavTab";

import { useTabsControl } from "@/hooks/useTabsControl";

import { CarouselSection } from "../_components/CarouselSection";
import { SearchBar } from "../_components/SearchBar";
import { listData, subjectsData } from "@/data";

export default function HomePage() {
  const { showTabOpen } = useTabsControl();

  const isTabOpen = Object.values(showTabOpen).some((value) => value === true);

  return (
    <div
      className={`relative  bg-[rgba(0,0,0,0.75)] p-6 overflow-hidden ${
        isTabOpen ? "h-[100dvh]" : "h-full"
      }`}
    >
      <Header />
      <main className="overflow-hidden">
        <p className="text-lg mb-12">Olá, Lucas, seja bem vindo ✨✨</p>
        <section>
          <h2 className="text-lg font-medium">Pesquisa Rápida</h2>
          <p className="text-sm mt-4 mb-7">
            Use o campo abaixo para encontrar disciplinas, professores ou
            arquivos em geral, sem a necessidade de navegar até eles
          </p>
          <SearchBar />
        </section>
        <CarouselSection title="Visitados recentemente" data={subjectsData} />
        <CarouselSection title="Continuar Respondendo" data={listData} />
      </main>
      <ConfigurationTab />
      <UserTab />
      <NavTab />
    </div>
  );
}
