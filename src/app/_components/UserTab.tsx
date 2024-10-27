"use client";

import { Tab } from "./Tab";
import { Row } from "./Row";
import { SystemButton } from "./SystemButton";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTabsControl } from "@/hooks/useTabsControl";

export const UserTab = () => {
  const { showTabOpen, handleToggleTabs } = useTabsControl();

  return (
    <Tab
      title="USUÁRIO"
      className={!showTabOpen.userTabIsOpen ? "translate-y-full" : ""}
    >
      <section>
        <h3 className="text-sm font-medium">DADOS PESSOAIS</h3>
        <div className="[&>:nth-child(2n+1)]:bg-[#0000004d] mt-4 text-sm">
          <Row title="Nome" value="Xxxxx Xxxxx Xxxxxx" />
          <Row title="Email" value="xxxxxxxxxxxxxxxx@xxxxx.xxx" />
          <Row title="Nome do curso" value="XXX" />
        </div>
      </section>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <SystemButton onClick={() => handleToggleTabs("userTabIsOpen")}>
          <X width={22} height={22} color="#DFEAEC" />
        </SystemButton>
      </div>
    </Tab>
  );
};
