"use client";

import { Tab } from "./Tab";
import { SystemButton } from "./SystemButton";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTabsControl } from "@/hooks/useTabsControl";
import Link from "next/link";

export const NavTab = () => {
  const { showTabOpen, handleToggleTabs } = useTabsControl();

  return (
    <Tab
      title="NAVEGAÇÃO"
      className={!showTabOpen.navigationTabIsOpen ? "translate-y-full" : ""}
    >
      <section className="flex flex-col [&>:nth-child(2n+1)]:bg-[#0000004d]">
        <Link
          href={"/"}
          className="w-screen text-sm font-medium pl-10 py-3.5 -ml-6"
        >
          HOME
        </Link>
        <Link
          href={"/subjects"}
          className="w-screen text-sm font-medium pl-10 py-3.5 -ml-6"
        >
          MATÉRIAS
        </Link>
        <Link
          href={"/"}
          className="w-screen text-sm font-medium pl-10 py-3.5 -ml-6"
        >
          PROFESSORES
        </Link>
        <Link
          href={"/"}
          className="w-screen text-sm font-medium pl-10 py-3.5 -ml-6"
        >
          FALE CONOSCO
        </Link>
      </section>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <SystemButton
          clicked={false}
          onClick={() => handleToggleTabs("navigationTabIsOpen")}
        >
          <X width={22} height={22} color="#DFEAEC" />
        </SystemButton>
      </div>
    </Tab>
  );
};
